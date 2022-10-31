import ChallengesList from "../../components/challenges-list";
import LoginManager from "../../components/loginManager";
import { NextPageWithLayout } from "../_app";
import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/sideBar";

const Challenges: NextPageWithLayout = () => {

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
      <SideBar />
      <LoginManager />
      <div className="float-right mt-14 max-w-16">
          <div>{challenges.map(c => <ChallengesList title={c.title} description={c.description} challenge_id={c._id} key={c._id}/>)}</div>
      </div>
    </>
  )
}

export default Challenges