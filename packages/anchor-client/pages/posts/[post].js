import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/layouts/default";
import AnchorCard from "../../components/anchor-card";

export default function post({ post_id }) {

    const [title, setTitle] = useState("Loading post...");
    const [content, setContent] = useState("Loading content...");
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) 
        {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/id/${router.query.post}`).then((response) => {
                if (!response.data.error) {
                    setTitle(response.data.post.title);
                    setContent(response.data.post.content);
                } else {
                    setTitle("Post doesn't exist!");
                    setContent("Failed to fetch post.")
                }
            }).catch((err) => {
                console.error(`An error occurred: ${err}`)
            })
        }   
    }, [router.isReady])


    return (<div className="text-center dark:text-slate-100 text-slate-800">
        <AnchorCard title={"Go back"} href={"/posts"}>Go back to posts</AnchorCard>
        <h1 className="font-black text-7xl m-20 bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">{title}</h1>
        <div>{content}</div>
        
    </div>)
}

post.getLayout = function getLayout(page) {
    return (<Layout>{page}</Layout>)
}