import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
import { isAdminFromToken } from "../auth.js";
import usersDAO from "./usersDAO.js";


let challanges;

export default class challangesDAO {

    static async injectDB(conn) {
        if (challanges) {
            return
        }
        try {
            challanges = await conn.db(process.env.ANCHOR_NS).collection("challanges");
        } catch (e) {
            console.error(`Failed to connect in challangesDAO: ${e}`);
        }
    }

    static async postChallange(title, desc, tests, rewards) {
        if (!rewards) {
            rewards = []
        }

        const challange = {
            title: title,
            desc: desc,
            tests: tests,
            rewards: rewards
        }

        try {
            return await challanges.insertOne(challange);
        } catch (e) {
            return { error: e };
        }
    }


    static async getChallanges({
        filters = null,
        page = 0,
        challangesPerPage = 20,
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
                if (user.completedChallanges) {
                    query = {...query, "_id": { "$nin": user.completedChallanges }};
                }
            } catch (e) {
                console.log(e);
            }
        }

        let cursor

        try {
            cursor = await challanges.find(query);
        } catch (e) {
            console.error(`Failed to use find in getChallanges in challangesDAO.js: ${e}`);
            return { postsList: [], total: 0 };
        }
        

        const displayCursor = cursor.limit(challangesPerPage).skip(challangesPerPage * page);

        try {
            const challangesList = await displayCursor.toArray();
            const totalchallanges = await challanges.countDocuments(query);

            return { challangesList, totalchallanges };
        } catch (e) {
            console.error(`Failed to convert cursor to array or to count total documents: ${e}`);
        }
    }

}