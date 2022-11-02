import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/postComponent.js";
import LoadingIcon from "../components/loading-icon.tsx";

export default function PostsList(amount) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?postsPerPage=9999999999`).then((response) => {
      if (!response.data.error) {
        setPosts(response.data.posts);
      }
    }).catch((err) => {
      console.log("An error occured: " + err)
    })
  }, [])

  return (
    <>
      <div className="float-right mt-14 mx-14 max-w-16 h-5/7 overflow-y-scroll">
        <p className="text-lg text-slate-600 dark:text-neutral-400">Alle posts</p>
        <div>
          {posts.length === 0 && <LoadingIcon />}
          {posts.map(p => <Post title={p.title} content={p.content} post_id={p._id} key={p._id}/>)}
        </div>
      </div>
    </>
  )
}