import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../components/layouts/default'
import AnchorCard from '../../components/anchor-card'
import Head from 'next/head'

export default function Post({ post_id }) {

  const [title, setTitle] = useState("Loading post...");
  const [content, setContent] = useState("Loading content...");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/id/${router.query.post}`).then((response) => {
        if (!response.data.error) {
          setTitle(response.data.post.title);
          setContent(response.data.post.content);
        } else {
          setTitle("Failed to find post!");
          setContent("The post might not exist.");
        }
      }).catch((err) => {
        console.error(`An error occurred: ${err}`)
        setTitle("Failed to find post!");
        setContent("The post might not exist.");
      })
    }
  }, [router.isReady])


  return (
    <div className="text-center dark:text-slate-100 text-slate-800">
      <Head>
        <title>{title}</title>
      </Head>
      <AnchorCard title={"Go back"} href={"/posts"}>Go back to posts</AnchorCard>
      <h1 className="font-black text-7xl m-20 bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">{title}</h1>
      <div>{content}</div>
    </div>
  )
}

Post.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}