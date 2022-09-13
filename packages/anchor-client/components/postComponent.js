import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnchorCard from "./anchor-card";



function Post({post_id, title, content}) {

    const [postTitle, setPostTitle] = useState("Placeholder title");
    const [postContent, setPostContent] = useState("Placeholder content");

    useEffect(() => {
        if (title) {
            setPostTitle(title);
        }
        if (content) {
            setPostContent(content);
        }
    }, [])

    return(
        <div>
            <AnchorCard title={title} href={`/posts/${post_id}`}>{content}</AnchorCard>
        </div>
    );
}


export default Post;