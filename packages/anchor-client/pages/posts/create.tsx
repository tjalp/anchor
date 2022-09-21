import { ReactElement } from "react";
import AnchorCard from "../../components/anchor-card";
import CreatePost from "../../components/create-post";
import Layout from "../../components/layouts/default";
import { NextPageWithLayout } from "../_app";

const Post: NextPageWithLayout = () => {
  return (
    <>
      <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
      <CreatePost />
    </>
  )
}

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Post