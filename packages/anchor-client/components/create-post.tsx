import axios from "axios";
import { useState } from "react";
import LoginManager from "./loginManager";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import Head from "next/head";

export default function CreatePost() {
  const [postTile, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  function handleCreatePostButtonClick() {
    const token = localStorage.getItem("SignInToken");
    const decodedToken = jwt_decode<tokenPayload>(token);

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      title: postTile,
      content: postContent,
      author: decodedToken.name,
      token: token
    }).then((response) => {
      if (!response.data.error) {
        Router.push(`/posts/${response.data.response.insertedId}`);
      } else {
        console.log(response.data.error);
      }
    }).catch((e) => { console.log(e); });
  }

  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      <LoginManager />
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Create Post</span>
      </div>
      <h2 className="dark:text-slate-400">Title</h2>
      <textarea id="postTitle" value={postTile} onChange={(e) => { setPostTitle(e.target.value) }} />
      <h2 className="dark:text-slate-400">Content</h2>
      <textarea id="postContent" value={postContent} onChange={(e) => { setPostContent(e.target.value) }} />
      <button onClick={handleCreatePostButtonClick}>Create post</button>
    </>
  )
}

interface tokenPayload {
  "iss": string, // The JWT's issuer
  "nbf": number,
  "aud": string, // Your server's client ID
  "sub": string, // The unique ID of the user's Google Account
  "hd": string, // If present, the host domain of the user's GSuite email address
  "email": string, // The user's email address
  "email_verified": boolean, // true, if Google has verified the email address
  "azp": string,
  "name": string,
  // If present, a URL to user's profile picture
  "picture": string,
  "given_name": string,
  "family_name": string,
  "iat": number, // Unix timestamp of the assertion's creation time
  "exp": number, // Unix timestamp of the assertion's expiration time
  "jti": string
}
