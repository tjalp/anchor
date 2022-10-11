import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import SideBar from "../components/sideBar"
import Post from "../components/postComponent.js"
import { sortAndDeduplicateDiagnostics } from "typescript";

export default function iets(){
  
    const [posts, setPosts] = useState([])
  
    useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?postPerPage=5`).then((response)=>{
        if(!response.data.errer){
          setPosts(response.data.posts)
        }
      }).catch((e)=>{
        console.error(e)
      })
    })

    return(
        <>
        <Head>
          <title>⚓Anchor</title>
        </Head>
        <div>
          <SideBar></SideBar>
          <div className="mt-10">
            {posts.map(p => <Post title={p.title} content={p.content} post_id={p._id} key={p._id} />)}
          </div>
        </div>
      </>
    )
}