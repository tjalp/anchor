import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/postComponent.js";
import LoadingIcon from "./loading-icon.tsx";

export default function PostsList(amount, page) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then((response) => {
      if (!response.data.error) {
        setPosts(response.data.posts);
      }
    }).catch((err) => {
      console.log("An error occured: " + err)
    })
  }, [])

  return (
    <>
      {posts.length === 0 && <div className="my-4 w-full flex items-center justify-center"><LoadingIcon /></div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-0 my-4">
        {posts.map(p => <Post title={p.title} content="" post_id={p._id} key={p._id} />)}
      </div>
    </>
  )
}