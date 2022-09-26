import axios from "axios";
import { useState } from "react";
import CodeEditorWindow from "./code-editor-window";

export default function CodeEditor() {

    const [code, setCode] = useState("// Enter javascript code here!");
    const [out, setOut] = useState("Enter code and press run");

    function onChange(action, data) {
        if (action == "code") {
            setCode(data);
        } else {
            console.log(`unhandled case: ${action}`);
        }
    }

    function handleRunCode() {
        setOut("Loading...");
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/code`, {
            source_code: btoa(code), // base64 encoded code
            language_id: 63
        }).then((response) => {
            console.log(response.data);
            const codeToken = response.data.token;
            setTimeout(() => {
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/code?token=${codeToken}`).then((response2) => {
                    console.log(response2.data);
                    if (!response2.data.stderr) {
                        
                        setOut(atob(response2.data.stdout));
                    } else {
                        setOut(`CODE ERROR: ${atob(response2.data.stderr)}`)
                    }
                }).catch((e) => {
                    console.log(e);
                    setOut(`Error!\n${e}`);
                })
            }, 2500)

        }).catch((e) => {
            console.log(e);
            setOut(`Error!\n${e}`);
        })
    }

    return (<div>
        <CodeEditorWindow onChange={onChange} language="javascript" code={code} theme="vs-dark" />
        <button className="dark:text-white" onClick={handleRunCode}>Run</button>
        <p className="text-white bg-black">{out}</p>
    </div>)
}