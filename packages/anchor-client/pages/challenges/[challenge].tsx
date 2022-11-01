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
    const [tests, setTests] = useState([]);
    const [output, setOutput] = useState("Press run");
    const [passes, setPasses] = useState([]);
    const [completedUsers, setCompletedUsers] = useState([]);

    const [functionName, setFunctionName] = useState("");
    const [args, setArgs] = useState(0);
    const [completedChallenge, setCompletedChallenge] = useState(false);
    const [userID, setUserID] = useState("");
    
    

    useEffect(() => {
        if (router.isReady) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/challenges/id/${router.query.challenge}`).then((response) => {
                
                setTitle(response.data.challenge.title);
                setDesc(response.data.challenge.desc);
                setTests(response.data.challenge.tests);
                setFunctionName(response.data.challenge.functionName);
                setArgs(response.data.challenge.args);
                setCode(response.data.challenge.templateCode);
                setCompletedUsers(response.data.challenge.completedUsers);
                

            }).catch((e) => {
                console.log(e);
            });
            if (localStorage.getItem("SignInToken") != null) {
                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, {token: localStorage.getItem("SignInToken")}).then((response) => {
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
            } else {
                router.push(`/login?r=${router.pathname}`);
            }
        }
    }, [router.isReady]);


    function onChange(action, data) {
        if (action == "code") {
            setCode(data);
        } else {
            console.warn(`Invalid action: ${action}`)
        }
    }

    function handleRunCode() {
        setOutput("loading...");
        let codegen = `${code}\nlet DATAEXPORTOUTPUT = "DATAEXPORT|";`;
        

        for (let i = 0; i < tests.length; i++) {
            let inputs = tests[i].stdin.split("|");
            let funcArgs = "";
            for (let i2 = 0; i2 < args; i2++) {
                funcArgs += inputs[i2];
                if (i2 != args - 1) {
                    funcArgs += ", ";
                }
            }
            
            codegen += `\nDATAEXPORTOUTPUT += ${functionName}(${funcArgs})`
            if (i != tests.length - 1) {
                codegen += " + '|'"
            }
            codegen += ";"
        }
        codegen += "\nconsole.log(DATAEXPORTOUTPUT);";
        console.log(codegen);


        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/code`, {
            source_code: btoa(codegen),
            language_id: 63
        }).then((response) => {
            if (!response.data.error) {
                const codeToken = response.data.token;
                setTimeout(() => {
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/code?token=${codeToken}`).then((response2) => {
                        if (!response2.data.stderr) {
                            console.log(response2.data);
                            const out = atob(response2.data.stdout);
                            const exportedData = out.substring(out.lastIndexOf("DATAEXPORT|") + "DATAEXPORT|".length);
                            setOutput(exportedData);
                            const hasPassed = checkTestsPass(exportedData);
                            setPasses(passes);

                            let completed = true;
                            for (let i = 0; i < hasPassed.length; i++) {
                                if (!hasPassed[i].passed) {
                                    completed = false;
                                }
                            }
                            if (completed) {
                                setCompletedChallenge(completed);
                                if (localStorage.getItem("SignInToken")) {
                                    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/challenges/complete`, {token: localStorage.getItem("SignInToken"), challenge: router.query.challenge}).then((response) => {
                                        router.push("/challenges");
                                    }).catch((e) => {   
                                        console.error(e);
                                    });
                                } else {
                                    router.push(`/login?r=${router.pathname}`);
                                }
                            }

                        } else {
                            setOutput(`CODE ERROR: ${atob(response2.data.stderr)}`);
                        }
                    });
                }, 2500);
            } else {
                console.error(response.data.error);
            }
        }).catch((e) => {
            console.error(e);
        })
    }

    function checkTestsPass(result) {
        console.log(result);
        const results = result.split("|");
        console.log(results);
        let passed = []
        if (results.length == tests.length) {
            for (let i = 0; i < tests.length; i++) {
                passed.push({passed: tests[i].stdout.replace(/\n/g, '') == results[i].replace(/\n/g, ''), index: i});
            }
        } else {
            console.error("Results amount is not the same as the amount of tests");
        }
        return passed;
    }


    return (<div>
        <AnchorCard title="Go back" href="/challenges">Go back to challenges</AnchorCard>
        <h1 className="dark:text-slate-200">{title}</h1>
        <p className="dark:text-slate-200">{desc}</p>
        {title ? <CodeEditorWindow language="javascript" code={code} theme="vs-dark" onChange={onChange} /> : null}
        <button className="dark:text-slate-400" onClick={handleRunCode}>Run</button>
        <p className="bg-black text-white">{output}</p>
        <br />
        <p className="dark:text-slate-200">Tests:</p>
        {passes.map((p) => <p className="dark:text-slate-200" key={p.index}>Passed {p.index}: {p.passed ? "yes" : "no"}</p>)}
        {tests.map((t) => <div key = {t.stdin} className="text-slate-200"><p>input: {t.stdin}</p><p>output: {t.stdout}</p></div>)}
        <p className="dark:text-slate-200">completed: {completedChallenge ? "yes" : completedUsers.includes(userID) ? "yes" : "no"}</p>
    </div>)
}


ChallengePage.getLayout = function getLayout(page) {
    return (<Layout>{page}</Layout>)
  }