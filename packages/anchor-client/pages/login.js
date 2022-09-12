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
			<AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
			<GoogleLogin />
		</>
  )
}

login.getLayout = function getLayout(page) {
	return (<Layout>{page}</Layout>);
}