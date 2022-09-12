import AnchorCard from '../components/anchor-card'
import Layout from '../components/layouts/default'
import GoogleLogin from '../components/google-login'
import Head from 'next/head'

export default function login() {
  return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Login</span>
      </div>
			<AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
			<GoogleLogin />
		</>
  )
}

login.getLayout = function getLayout(page) {
	return (<Layout>{page}</Layout>);
}