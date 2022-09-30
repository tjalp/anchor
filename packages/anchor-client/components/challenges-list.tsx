import axios from "axios";
import { useEffect, useState } from "react";
import AnchorCard from "./anchor-card";


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

    return (<div>
        {challenges.map(c => <AnchorCard title={c.title} href={`/challenges/${c._id}`}>c.desc</AnchorCard>)}
    </div>)
}