import e from "cors";
import { verifyUser } from "../auth.js";

export default class usersController {
    static async apiVerifyUser(req, res, next) {
        try
        {

            const verified = await verifyUser(req.body.token);
            if (verified.authorised) {
                
                res.json({ status: "success" });
            } else {
                res.status(500).json({ status: "failed", error: verified.error });
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({ status: "failed", error: e.message });
        }
    }
}