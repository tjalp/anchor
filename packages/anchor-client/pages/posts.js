import AnchorCard from "../components/anchor-card";
import Post from '../components/post'
import Layout from '../components/layouts/default'
import Head from 'next/head'

export default function posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
        <Post post_id="631f138b745ca5b4764f6f64" />
      </div>
    </>
  )
}


posts.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}