import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../components/layouts/default'
import AnchorCard from '../../components/anchor-card'
import Head from 'next/head'
import LoadingIcon from '../../components/loading-icon'

export default function Post({ post_id }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AnchorCard title={"Go back"} href={router.query.r ? router.query.r : "/posts"}>Go back</AnchorCard>
      {title === "" && <div className="my-4 w-full flex items-center justify-center"><LoadingIcon /></div>}
      <div className="text-center m-6 text-black dark:text-slate-400">
        <span className="font-black text-7xl m-20 bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">{title}</span>
        <div className="my-4">{content}</div>
      </div>
    </>
  )
}

Post.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}