import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let posts;

export default class PostsDAO{
    static async injectDB(conn) {
        if (posts) {
            return
        }
        try {
            posts = await conn.db(process.env.ANCHOR_NS).collection("posts");
        } catch (e) {
            console.error(`Failed to connect in postsDAO: ${e}`);
        }
    }

    static async addPost(author, title, content, date) {
        try {
            const postDoc = {
                author: author,
                title: title,
                content: content,
                date: date
            }
            
            
            return await posts.insertOne(postDoc);
        } catch (e) {
            console.log(`Failed to post post: ${e}`);
            return { error: e.message };
        }
    }

    static async updatePost({post_id, ...updateProperties}) {
        try {
            let copy = {};
            Object.assign(copy, updateProperties.updateProperties)
            const updateRespone = await posts.updateOne(
                {_id: ObjectId(post_id)},
                { $set: copy} );
            
            return updateRespone;
        } catch (e) {
            console.error(`Failed to update post: ${e}`);
            return { error: e.message };
        }
    }

    static async deletePost(post_id) {
        try {
            const deleteResponse = await posts.deleteOne({
                _id: ObjectId(post_id)
            });
            console.log(deleteResponse, post_id);
            return deleteResponse;
        } catch (e) {
            console.error(`Failed to delete post: ${e}`);
            return { error: e.message };
        }
    }

    static async getPosts({
        filters = null,
        page = 0,
        postsPerPage = 20
    } = {}) {
        let query;
        if (filters) {
            if ("title" in filters) {
                query = { $text: { $search: filters["title"] } };
            }
        }

        let cursor

        try {
            cursor = await posts.find(query);
        } catch (e) {
            console.error(`Failed to use find in getPosts in postsDAO.js: ${e}`);
            return { postsList: [], total: 0 };
        }

        const displayCursor = cursor.limit(postsPerPage).skip(postsPerPage * page);

        try {
            const postsList = await displayCursor.toArray();
            const totalPosts = await posts.countDocuments(query);

            return { postsList, totalPosts };
        } catch (e) {
            console.error(`Failed to convert cursor to array or to count total documents: ${e}`);
        }
    }

    static async getPostById(id) {
        try {
            return await posts.findOne({"_id": ObjectId(id)});
        } catch (e) {
            return { error: e.message };
        }
    }
}