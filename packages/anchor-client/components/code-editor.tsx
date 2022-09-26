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
        axios.post(`${process.env.NEXT_PUBLIC_JUDGE0_API}/submissions`, {
            source_code: code,
            language_id: 63
        }).then((response) => {
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        })
    }

    return (<div>
        <CodeEditorWindow onChange={onChange} language="javascript" code={code} theme="vs-dark" />
        <button className="dark:text-white" onClick={handleRunCode}>Run</button>
    </div>)
}