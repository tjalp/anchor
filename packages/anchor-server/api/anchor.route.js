import express from "express";
import postsController from "./posts.controller.js"

const router = express.Router();

router.route("/posts")
    .get(postsController.apiGetPosts)
    .post(postsController.apiPostPost)
    .put(postsController.apiUpdatePost)
    .delete(postsController.apiDeletePost);


router.route("/posts/id/:id")
    .get(postsController.apiGetPostById);

export default router;