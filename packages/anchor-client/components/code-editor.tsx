import axios from "axios";
import { useState } from "react";
import CodeEditorWindow from "./code-editor-window";

export default function CodeEditor() {

    const [code, setCode] = useState("// Enter javascript code here!")

    function onChange(action, data) {
        if (action == "code") {
            setCode(data);
        } else {
            console.log(`unhandled case: ${action}`);
        }
    }

    function handleRunCode() {
        
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/code`, {
            source_code: btoa(code), // base64 encoded code
            language_id: 63
        }).then((response) => {
            console.log(response.data);
            const codeToken = response.data.token;
            setTimeout(() => {
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/code?token=${codeToken}`).then((response) => {
                    console.log(response.data);
                    console.log(atob(response.data.stdout));
                }).catch((e) => {
                    console.log(e);
                    
                })
            }, 5000)

        }).catch((e) => {
            console.log(e);
        })
    }

    return (<div>
        <CodeEditorWindow onChange={onChange} language="javascript" code={code} theme="vs-dark" />
        <button className="dark:text-white" onClick={handleRunCode}>Run</button>
    </div>)
}