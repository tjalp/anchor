import AnchorCard from "../components/anchor-card";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/default";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Anchor, your favorite website</title>
      </Head>
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        This is <span className="font-black bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent">⚓Anchor.</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-0">
        <AnchorCard title="Toggle Dark Mode (WIP)" href="">Switch between light and dark mode</AnchorCard>
        <AnchorCard title="Anchor Repository" href="https://github.com/tjalp/anchor/">Check out the source code of Anchor</AnchorCard>
        <AnchorCard title="Test Page" href="/test">Enter the temporary test page</AnchorCard>
        <AnchorCard title="404" href="/404">Navigate to a non-existent page</AnchorCard>
        <AnchorCard title="Login" href="/login">Login with google</AnchorCard>
        <AnchorCard title="Posts" href="/posts">View posts</AnchorCard>
        <AnchorCard title="Challenges" href="/challenges">See a list of challenges</AnchorCard>
        <AnchorCard title="Create post" href="/posts/create">You must be admin and backend must be running</AnchorCard>
        <AnchorCard title="Open editor" href="/editor">Open code editor</AnchorCard>
        <AnchorCard title="Create challenge" href="/challenges/create">Create a new challenge, you must be admin and backend must be running</AnchorCard>
        <AnchorCard title="Challenges" href="/challenges">View challenges</AnchorCard>
        <AnchorCard title="Home" href="/home">coole home page?</AnchorCard>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home