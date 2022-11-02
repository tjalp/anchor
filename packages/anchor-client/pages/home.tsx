import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import SideBar from "../components/sideBar"
import Post from "../components/postComponent.js"
import { sortAndDeduplicateDiagnostics } from "typescript";
import Link from "next/link";
import LoadingIcon from "../components/loading-icon";

export default function home(){
  
    const [posts, setPosts] = useState([])
  
    useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?postsPerPage=5`).then((response)=>{
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
        <div className="flex flex-row flex-nowrap h-screen select-none">
          <SideBar />
          <div className="float-right mt-14 max-w-16">
            <p className="text-lg text-slate-600 dark:text-neutral-400">Vijf nieuwste posts</p>
            <div>
              {posts.length === 0 && <LoadingIcon />}
              {posts.map(p => <Post title={p.title} content={p.content} post_id={p._id} key={p._id}/>)}
            </div>
          </div>
          <div className="mx-32 mt-14">
            <div>
              <p className="text-lg text-slate-600 dark:text-neutral-400 mb-2">Scores van andere leerlingen</p>
              <div className="h-96 w-96 border border-slate-200 dark:border-neutral-600 bg-slate-50 dark:bg-zinc-700 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 cursor-pointer overflow-y-scroll dark:text-white">
                <div>lijst met scores van mensen</div>
              </div>
            </div>
            <div>
              <div className="w-96 mt-7 p-5 border border-slate-200 dark:border-neutral-600 bg-slate-50 dark:bg-zinc-700 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 cursor-pointer text-xl dark:text-white">
                te doen challenge  
              </div>
              <p className="text-lg text-slate-600 dark:text-neutral-400 mt-2">Deze challenge moet je nog doen!</p>
            </div>
          </div>
        </div>
      </>
    )
}