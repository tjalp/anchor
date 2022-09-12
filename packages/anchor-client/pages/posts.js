import AnchorCard from "../components/anchor-card";
import Layout from "../components/layouts/default";
import PostsList from "../components/postsList";

export default function Posts() {
  return (<div>
    <AnchorCard title="Go back" href="/">Go back to the home page</AnchorCard>
    <PostsList />
  </div>)
}

Posts.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}