import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyUser(token) {
    try
    {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        return {authorised: true, payload: payload};

    } catch (e) {
        console.log(e);
        return {authorised: false, error: e};
    }
}

export {verifyUser};