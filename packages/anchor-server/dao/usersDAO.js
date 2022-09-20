import mongodb from "mongodb";
const ObjectID = mongodb.ObjectId;
import {verifyUser} from "../auth.js";

let users;

export default class usersDAO {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db(process.env.ANCHOR_NS).collection("users");
        } catch (e) {
            console.error(`Failed to connect in postsDAO: ${e}`);
        }
    }

    static async registerUser(token) {
        try {
            const verified = await verifyUser(token);

            if (verified.authorised) {
                const payload = verified.payload;

                const currentUser = await this.getUserByGoogleId(payload.sub); // this is for checking if the user already exists

                if (!currentUser) {
                    
                    const userResponse = await users.insertOne({
                        "googleId": payload.sub, // google user ID
                        "email": payload.email,
                        "picture": payload.picture,
                        "name": payload.name,
                        "given_name": payload.given_name,
                        "family_name": payload.family_name,
                        "permission_level": "user"
                    });
                    return { response: userResponse };
                    
                } else {
                    if (!currentUser.error) {
                        return { error: "userExistsAlready" };
                    } else {
                        return { error: currentUser.error };
                    }
                }


            } else {
                return { error: verified.error };
            }
        } catch (e) {
            console.log(e);
            return { error: e };
        }
    }

    static async getPublicUserInfo(objId) {
        user = await this.getUserById(id);
        if (!user.error) {
            return ({
                "_id": user._id,
                "googleId": googleId,
                "picture": user.picture,
                "name": user.name,
                "given_name": user.given_name,
                "family_name": user.family_name,
                "permission_level": user.permission_level
            });
        } else {
            return { error: user.error };
        }
    }

    static async getUserByObjId(objId) {
        try {
            return await users.findOne({"_id": ObjectID(objId)});
        } catch (e) {
            console.log(e);
            return { error: e.message };
        }
    }

    static async getUserByGoogleId(googleId) {
        try {
            return await users.findOne({"googleId": googleId});
        } catch (e) {
            console.log(e);
            return { error: e.message };
        }
    }
}