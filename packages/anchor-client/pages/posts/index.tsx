import AnchorCard from "../../components/anchor-card";
import PostsList from "../../components/postsList";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layouts/default";
import Head from "next/head";

const Posts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
				<title>Posts</title>
			</Head>
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Posts</span>
      </div>
      <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
      <PostsList />
    </>
  )
}

Posts.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Posts