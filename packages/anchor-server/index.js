import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import postsDAO from "./dao/postsDAO.js";
import usersDAO from "./dao/usersDAO.js"
import challangesDAO from "./dao/challangesDAO.js";

dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 5000;

MongoClient.connect(
    process.env.ANCHOR_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }
    
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await postsDAO.injectDB(client);
        await usersDAO.injectDB(client);
        await challangesDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    });