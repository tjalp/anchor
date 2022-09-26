import { CommandFailedEvent } from "mongodb";
import { isAdminFromToken, verifyUser } from "../auth.js";
import challangesDAO from "../dao/challangesDAO.js"
import usersDAO from "../dao/usersDAO.js";

export default class challangesController {

    static async apiPostChallange(req, res, next) {
        const title = req.body.title;
        const desc = req.body.desc;
        const tests = req.body.tests;
        const rewards = req.body.rewards;
        const token = req.body.token;

        if (isAdminFromToken(token)) {
            const postResponse = challangesDAO.postChallange(title, desc, tests, rewards);
            if (!postResponse.error) {
                res.json({ status: "success", response: postResponse });
            } else {
                res.status(500).json({ status: "failed", error: postResponse.error });
            }
        } else {
            res.status(403).json({ status: "failed", error: "Either the token is invalid or you're not an admin!" });
        }
    }

    static async getChallanges(req, res, next) {
        const challangesPerPage = req.query.challangesPerPage ? parseInt(req.query.challangesPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;
        const onlyIncomplete = req.body.onlyIncomplete;
        const token = req.body.token;




        let filters = {}
        if (req.query.title) {
            filters.title = req.query.title;
        }
        let user = null;
        if (onlyIncomplete) {
            const authResponse = await verifyUser(token);
            if (authResponse.authorised) {
                user = await usersDAO.getUserByGoogleId(authResponse.payload.sub);
            } else {
                onlyIncomplete = false;
                console.log("Tried to only show incomplete challanges, but the user is not authorised!")
            }
        }
        
        const { challangesList, totalChallanges } = await challangesDAO.getChallanges({filters, page, challangesPerPage, onlyIncomplete, user});

        let response  = {
            challanges: challangesList,
            page: page,
            filters: filters,
            entries_per_page: postsPerPage,
            total_results: totalChallanges
        }
        res.json(response);
    }


}