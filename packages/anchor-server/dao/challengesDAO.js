import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
import { isAdminFromToken } from "../auth.js";
import usersDAO from "./usersDAO.js";


let challenges;

export default class challengesDAO {

    static async injectDB(conn) {
        if (challenges) {
            return;
        }
        try {
            challenges = await conn.db(process.env.ANCHOR_NS).collection("challenges");
        } catch (e) {
            console.error(`Failed to connect in challengesDAO: ${e}`);
        }
    }

    static async postChallenge(title, desc, tests, rewards) {
        if (!rewards) {
            rewards = []
        }

        const challenge = {
            title: title,
            desc: desc,
            tests: tests,
            rewards: rewards
        }

        try {
            return await challenges.insertOne(challenge);
        } catch (e) {
            return { error: e };
        }
    }


    static async getChallenges({
        filters = null,
        page = 0,
        challengesPerPage: challengesPerPage = 20,
        onlyIncomplete = false,
        user
    } = {}) {
        let query;
        if (filters) {
            if ("title" in filters) {
                query = { $text: { $search: filters["title"] } };
            }
        }


        if (onlyIncomplete && user) {
            try {
                if (user.completedChallenges) {
                    query = {...query, "_id": { "$nin": user.completedChallenges }};
                }
            } catch (e) {
                console.log(e);
            }
        }

        let cursor

        try {
            cursor = await challnges.find(query);
        } catch (e) {
            console.error(`Failed to use find in getchallenges in challengesDAO.js: ${e}`);
            return { postsList: [], total: 0 };
        }
        

        const displayCursor = cursor.limit(challengesPerPage).skip(challengesPerPage * page);

        try {
            const challengesList = await displayCursor.toArray();
            const totalchallenges = await challenges.countDocuments(query);

            return { challengesList, totalchallenges };
        } catch (e) {
            console.error(`Failed to convert cursor to array or to count total documents: ${e}`);
        }
    }


    static async getChallengseById(id) {
        try {
            return await challenges.findOne({"_id": ObjectId(id)});
        } catch (e) {
            return { error: e.message };
        }
    }

}