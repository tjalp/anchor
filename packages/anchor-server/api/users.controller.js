import { verifyUser } from "../auth.js";
import usersDAO from "../dao/usersDAO.js";


export default class usersController {
    static async apiLoginUser(req, res, next) {
        try
        {

            const verified = await verifyUser(req.body.token);
            if (verified.authorised) {
                const payload = verified.payload;
                const currentUser = await usersDAO.getUserByGoogleId(payload.sub);

                if (!currentUser) {
                    // register user
                    const registerResponse = await usersDAO.registerUser(req.body.token);
                    if (!registerResponse.error) {
                        res.json({status: "success", response: registerResponse.response, userID: registerResponse.insertedID});
                    } else {
                        res.status(500).json({ status: "failed", error: registerResponse.error });
                    }
                } else {
                    if (!currentUser.error) {
                        // login user
                        res.json({ status: "success", response: currentUser, userID: currentUser._id });
                    } else {
                        res.status(500).json({ status: "failed", error: currentUser.error });
                    }
                }

            } else {
                res.json({ status: "failed", error: verified.error, reLogin: true });
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({ status: "failed", error: e.message });
        }
    }
}