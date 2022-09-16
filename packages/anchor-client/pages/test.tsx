import AnchorCard from "../components/anchor-card";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/default";
import Head from "next/head";

const Test: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-t from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Test Page</span>
      </div>
      <div className="grid grid-cols-1">
        <AnchorCard title="Go Home" href="/">Return to the home page</AnchorCard>
      </div>
    </>
  )
}

Test.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Test