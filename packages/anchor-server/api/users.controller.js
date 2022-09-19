import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default class usersController {
    static async verifyUser(req, res, next) {
        try
        {
            const token = req.body.token;
            
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID
            });
            
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            console.log(payload);
            res.json({ status: "success", payload: payload });
        } catch (e) {
            console.log(e);
            res.status(500).json({ status: "failed", error: e.message });
        }
    }
}