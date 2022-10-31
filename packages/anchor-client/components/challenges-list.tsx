import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link"

export default function ChallengesList({challenge_id, title, desc}) {

  const [challenges, setChallenges] = useState([]);
  const [userID, setUserID] = useState("");
  const router = useRouter();
  const [challengeTitle, setChallengeTitle] = useState("Placeholder title");
  const [challengeDescription, setChallengeDescription] = useState("Placeholder content");

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
    <Link href={`/challenges/${challenge_id}`}>
      <div className="my-4 p-5 border border-slate-200 dark:border-neutral-600 bg-slate-50 dark:bg-zinc-700 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 cursor-pointer">
          <div className="text-2xl text-slate-900 dark:text-neutral-50">{title}</div>
          <div className="text-lg text-slate-600 dark:text-neutral-400">{desc}</div>
      </div>
    </Link>
  )
}