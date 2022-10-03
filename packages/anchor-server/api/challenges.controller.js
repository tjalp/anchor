import { CommandFailedEvent } from "mongodb";
import { isAdminFromToken, verifyUser } from "../auth.js";
import challengesDAO from "../dao/challengesDAO.js"
import usersDAO from "../dao/usersDAO.js";

export default class challengesController {

    static async apiPostChallenge(req, res, next) {
        const title = req.body.title;
        const desc = req.body.desc;
        const tests = req.body.tests;
        const rewards = req.body.rewards;
        const token = req.body.token;

        if (isAdminFromToken(token)) {
            const postResponse = await challengesDAO.postChallenge(title, desc, tests, rewards);
            if (!postResponse.error) {
                res.json({ status: "success", response: postResponse });
            } else {
                res.status(500).json({ status: "failed", error: postResponse.error });
            }
        } else {
            res.status(403).json({ status: "failed", error: "Either the token is invalid or you're not an admin!" });
        }
    }

    static async getChallenges(req, res, next) {
        const challengesPerPage = req.query.challengesPerPage ? parseInt(req.query.challengesPerPage, 10) : 20;
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
                console.log("Tried to only show incomplete challenges, but the user is not authorised!")
            }
        }
        
        const { challengesList, totalChallenges } = await challengesDAO.getChallenges({filters, page, challengesPerPage: challengesPerPage, onlyIncomplete, user});

        let response  = {
            challenges: challengesList,
            page: page,
            filters: filters,
            entries_per_page: postsPerPage,
            total_results: totalChallenges
        }
        res.json(response);
    }



    static async apiGetChallengeById(req, res, next) {
        try {
            const id = req.params.id || {};
            const response = await challengesDAO.getChallengseById(id);
            if (!response.error) {
                res.json({ status: "success", challenge: response});
            } else {
                res.status(404).json({ status: "failed", error: response.error });
            }
        } catch(e) {
            res.status(500).json({ status: "failed", error: e.message});
        }
    }
}