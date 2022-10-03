import CodeEditor from "../../components/code-editor";
import axios from "axios";
import LoginManager from "../../components/loginManager";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function ChallengePage() {

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/challenges/id/${router.query.challenge}`).then((response) => {
                console.log(response.data);
            }).catch((e) => {
                console.log(e);
            })
        }
    }, [router.isReady]);

    return (<div>
        <LoginManager />
    </div>)
}