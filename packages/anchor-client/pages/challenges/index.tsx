import ChallengesList from "../../components/challenges-list";
import LoginManager from "../../components/loginManager";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SideBar from "../../components/sideBar";
import Head from "next/head";

export default function challenges(){

  const [challenges, setChallenges] = useState([]);
  const [userID, setUserID] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (localStorage.getItem("SignInToken") != null) {

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, { token: localStorage.getItem("SignInToken") }).then((response) => {
          if (!response.data.error) {
            setUserID(response.data.userID);
          } else {
            console.error(response.data.error);
            router.push(`/login?r=${router.pathname}`);
          }
        }).catch((e) => {
          console.error(e);
          router.push(`/login?r=${router.pathname}`);
        });

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/challenges`).then((response) => {
            if (!response.data.error) {
                setChallenges(response.data.challenges);
            } else {
                console.error(response.data.error);
            }
        }).catch((e) => {
            console.error(e);
        });
      }
    }
  }, [])

  return(
  <>  
    <Head>
      <title>⚓Challenges</title>
    </Head>
    <LoginManager />
    <div className="flex flex-row flex-nowrap h-screen select-none">
      <SideBar />
      <div className="float-right mt-14 max-w-16">
        <div>{challenges.map(c => <ChallengesList title={c.title} desc={c.desc} completed={c.completedUsers.includes(userID) ? "ja" : "nee"} challenge_id={c._id} key={c._id}/>)}</div>
      </div>
    </div>
  </>
  )
}