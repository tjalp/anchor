import AnchorCard from "../components/anchor-card";
import GoogleLogin from "../components/google-login";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layouts/default";
import Head from "next/head";

const Login: NextPageWithLayout = () => {
  return (
    <>
			<Head>
				<title>Login</title>
			</Head>
			<div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Login</span>
      </div>
			<AnchorCard title="Go back" href="/home">Ga terug naar home</AnchorCard>
			<div className="text-center"><GoogleLogin /></div>
		</>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Login