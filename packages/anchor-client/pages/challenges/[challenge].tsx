import CodeEditorWindow from "../../components/code-editor-window";
import axios from "axios";
import LoginManager from "../../components/loginManager";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/default";
import AnchorCard from "../../components/anchor-card";


export default function ChallengePage() {

    const router = useRouter();
    const [code, setCode] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    

    useEffect(() => {
        if (router.isReady) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/challenges/id/${router.query.challenge}`).then((response) => {
                setTitle(response.data.challenge.title);
                setDesc(response.data.challenge.desc);
            }).catch((e) => {
                console.log(e);
            })
        }
    }, [router.isReady]);


    function onChange(action, data) {
        if (action == "code") {
            setCode(data);
        } else {
            console.warn(`Invalid action: ${action}`)
        }
    }


    return (<div>
        <LoginManager />
        <AnchorCard title="Go back" href="/challenges">Go back to challenges</AnchorCard>
        <h1 className="dark:text-slate-200">{title}</h1>
        <p className="dark:text-slate-200">{desc}</p>
        <CodeEditorWindow language="javascript" code={code} theme="vs-dark" onChange={onChange} />
    </div>)
}


ChallengePage.getLayout = function getLayout(page) {
    return (<Layout>{page}</Layout>)
  }