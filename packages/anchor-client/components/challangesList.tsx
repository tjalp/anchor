import axios from "axios";
import { useEffect, useState } from "react";
import AnchorCard from "./anchor-card";


export default function ChallangesList() {

    const [challanges, setChallanges] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/challanges`).then((response) => {
            if (!response.data.error) {
                setChallanges(response.data.challanges);
            } else {
                console.error(response.data.error);
            }
        }).catch((e) => {
            console.error(e);
        })
    }, [])

    return (<div>
        {challanges.map(c => <AnchorCard title={c.title} href={`/challanges/${c._id}`}>c.desc</AnchorCard>)}
    </div>)
}