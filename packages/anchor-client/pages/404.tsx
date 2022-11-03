import AnchorCard from "../components/anchor-card";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/default";
import Head from "next/head";

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-r from-[#f7ff00] to-[#db36a4] bg-clip-text text-transparent">~ 404 ~</span>
      </div>
      <div className="items-center">
        <AnchorCard title="Go Home" href="/home">Return to the home page</AnchorCard>
      </div>
    </>
  )
}

NotFound.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default NotFound