import CodeEditorWindow from "../../components/code-editor-window";
import axios from "axios";
import LoginManager from "../../components/loginManager";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/default";
import Link from "next/link";


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
                }, 1000);
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

    return (
    <div className="mt-5">
        <div className="flex flex-row">
        <Link href="/challenges"><div className="mt-3 p-3 border border-slate-200 dark:border-neutral-600 bg-slate-50 dark:bg-zinc-700 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 cursor-pointer text-lg text-slate-600 dark:text-neutral-400">&#10540;close</div></Link>
            <div className="px-14">
                <div className="text-2xl text-slate-900 dark:text-neutral-50">{title}</div>
                <div className="text-lg text-slate-600 dark:text-neutral-400">{desc}</div>
            </div>
            <p className="text-lg text-slate-600 dark:text-neutral-400 mt-6 mx-48">Voltooid: {completedChallenge ? "yes" : completedUsers.includes(userID) ? "Ja" : "Nee"}</p>
        </div>
        <div className="flex flex-row">
            {title ? <CodeEditorWindow language="javascript" code={code} theme="vs-dark" onChange={onChange} /> : null}
            <div className="h-96 w-1/2 m-2 bg-slate-200 dark:bg-zinc-700 border border-transparent rounded">
                <p className="dark:text-slate-200 m-2">{output}</p>
            </div>
        </div>
        <button className="p-3 px-5 bg-green-500 hover:bg-green-600 border border-transparent rounded-lg text-gray-100" onClick={handleRunCode}>&#62;Run</button>
    </div>
    )
}


ChallengePage.getLayout = function getLayout(page) {
    return (<Layout>{page}</Layout>)
  }