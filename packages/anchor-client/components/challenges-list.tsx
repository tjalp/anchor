import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AnchorCard from "./anchor-card";
import LoadingIcon from "./loading-icon";

export default function ChallengesList() {

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
            console.log(response.data.challenge);
          } else {
            console.error(response.data.error);
          }
        }).catch((e) => {
          console.error(e);
        })
    } else {
      router.push(`/login?r=${router.pathname}`);
    }
  }
  }, [router.isReady])

  return (
    <>
      {challenges.length === 0 && <div className="my-4 w-full flex items-center justify-center"><LoadingIcon /></div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-0 my-4">
        {challenges.map(c => <AnchorCard title={c.title} href={`/challenges/${c._id}`} key={c._id}>{c.desc} <br /> completed: {c.completedUsers ? c.completedUsers.includes(userID) ? "yes" : "no" : "unknown"}</AnchorCard>)}
      </div>
    </>
  )
}