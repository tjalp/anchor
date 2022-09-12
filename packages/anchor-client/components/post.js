import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnchorCard from "./anchor-card";



function Post({post_id}) {

    const [title, setTitle] = useState("Placeholder title");
    const [content, setContent] = useState("Placeholder content");

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/v1/posts/id/${post_id}`).then((response)=>{
            if (!response.data.error) 
            {
                setTitle(response.data.post.title);
                setContent(response.data.post.content);
            } else {
                setTitle("Error loading post!");
                setContent(response.error);
            }
        });
    }, [])

    return(
        <div>
            <AnchorCard title={title} href={"/posts"}>{content}</AnchorCard>
        </div>
    );
}


export default Post;