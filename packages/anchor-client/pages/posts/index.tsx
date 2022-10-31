import PostsList from "../../components/postsList";
import SideBar from "../../components/sideBar"
import Head from "next/head";

export default function posts(){
  return (
    <>
      <Head>
				<title>⚓Posts</title>
			</Head>
      <div className="flex flex-row flex-nowrap h-screen select-none">
        <SideBar />
        <PostsList />
      </div>
    </>
  )
}