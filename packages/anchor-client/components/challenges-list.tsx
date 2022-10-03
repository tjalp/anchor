import axios from "axios";
import { useEffect, useState } from "react";
import AnchorCard from "./anchor-card";
import LoadingIcon from "./loading-icon";

export default function ChallengesList() {

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

  return (
    <>
      {challenges.length === 0 && <div className="my-4 w-full flex items-center justify-center"><LoadingIcon /></div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-0 my-4">
        {challenges.map(c => <AnchorCard title={c.title} href={`/challenges/${c._id}`}>{c.desc}</AnchorCard>)}
      </div>
    </>
  )
}