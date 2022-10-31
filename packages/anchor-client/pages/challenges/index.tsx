import ChallengesList from "../../components/challenges-list";
import LoginManager from "../../components/loginManager";
import { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/sideBar";
import Head from "next/head";

export default function challenges(){

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/challenges`).then((response) => {
          if (!response.data.error) {
              setChallenges(response.data.challenges);
          } else {
              console.error(response.data.error);
          }
      }).catch((e) => {
          console.error(e);
      })
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
        <div>{challenges.map(c => <ChallengesList title={c.title} desc={c.desc} challenge_id={c._id} key={c._id}/>)}</div>
      </div>
    </div>
  </>
  )
}