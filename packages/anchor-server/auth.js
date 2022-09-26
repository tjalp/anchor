import { OAuth2Client } from "google-auth-library";
import usersDAO from "./dao/usersDAO.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

//checks if the token is a valid google token
async function verifyUser(token) {
    try
    {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        return {authorised: true, payload: payload};

    } catch (e) {
        //console.log(e);
        return {authorised: false, error: e};
    }
}

async function isAdminFromToken(token) {
    try {
        const verified = await verifyUser(token);

        if (verified.authorised) {
            const userData = await usersDAO.getUserByGoogleId(verified.payload.sub);
            if (userData && !userData.error) {
                if (userData.permission_level == "admin") {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.log(userData);
                return false;
            }
        } else {
            console.log("Unauthorised token!");
            return false;
        }

    } catch (e) {
        console.log(e);
        return false;
    }
}

export {verifyUser, isAdminFromToken};