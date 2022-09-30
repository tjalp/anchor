import express from "express";
import postsController from "./posts.controller.js";
import usersController from "./users.controller.js";
import codeController from "./code.controller.js";
import challengesController from "./challenges.controller.js";

const router = express.Router();

router.route("/posts")
    .get(postsController.apiGetPosts)
    .post(postsController.apiPostPost)
    .put(postsController.apiUpdatePost)
    .delete(postsController.apiDeletePost);


router.route("/posts/id/:id")
    .get(postsController.apiGetPostById);

router.route("/users/auth").post(usersController.apiLoginUser);

router.route("/code").post(codeController.sendCode).get(codeController.getCode);

router.route("/challenges").post(challengesController.apiPostChallenge).get(challengesController.getChallenges);

export default router;