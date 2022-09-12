import PostsDAO from "../dao/postsDAO.js";

export default class PostController {
    static async apiPostPost(req, res, next) {
        try{
            const title = req.body.title;
            const content = req.body.content;
            const author = req.body.author;
            const date = new Date();

            const PostResponse = await PostsDAO.addPost(author, title, content, date);
            if (!PostResponse.error) 
            {
                res.json({ status: "success", response: PostResponse });
            } else {
                res.status(404).json({ status: "failed", error: PostResponse.error });
            }
        } catch (e) {
            res.status(500).json({ status: "failed", error: e.message });
        }
    }

    static async apiUpdatePost(req, res, next) {
        try {
            const post_id = req.body.post_id;
            let updateInfo = {};
            if (req.body.title) {
                updateInfo = {...updateInfo, title: req.body.title};
            }
            if (req.body.content) {
                updateInfo = {...updateInfo, content: req.body.content};
            }
            const response = await PostsDAO.updatePost({post_id: post_id, updateProperties: updateInfo});
            if (!response.error) {
                res.json({ status: "success", response: response });
            } else {
                res.status(404).json({ status: "failed", error: response.error, respsone: response });
            }
            
        } catch (e) {
            res.status(500).json({ status: "failed", error: e.message });
        }
    }

    static async apiDeletePost(req, res, next) {
        try {
            const post_id = req.body.post_id;

            const response = await PostsDAO.deletePost(post_id);
            if (!response.error) {
                res.json({ status: "success", respsone: response });
            } else {
                res.status(404).json({ status: "failed", error: response.error, respsone: response });
            }
        } catch (e) {
            res.status(500).json({ status: "failed", error: e.message });
        }
    }

    static async apiGetPosts(req, res, next) {
        const postsPerPage = req.query.postsPerPage ? parseInt(req.query.postsPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;
        const id = req.query.id;

        let filters = {}
        if (req.query.title) {
            filters.title = req.query.title;
        }

        const { postsList, totalPosts } = await PostsDAO.getPosts({filters, page, postsPerPage});

        let response  = {
            posts: postsList,
            page: page,
            filters: filters,
            entries_per_page: postsPerPage,
            total_results: totalPosts
        }
        res.json(response);
    }
    
    static async apiGetPostById(req, res, next) {
        try {
            const id = req.params.id || {};
            const post = await PostsDAO.getPostById(id);
            if (!post.error) {
                res.json({ status: "success", post: post});
            } else {
                res.status(404).json({ status: "failed", error: post.error })
            }
        } catch(e) {
            res.status(500).json({ status: "failed", error: e.message});
        }
    }
}