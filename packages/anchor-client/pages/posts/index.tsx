import PostsList from "../../components/postsList";
import SideBar from "../../components/sideBar"
import Head from "next/head";
import LoginManager from "../../components/loginManager";

export default function posts(){
  return (
    <>
      <LoginManager />
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