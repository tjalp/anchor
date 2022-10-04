import axios from "axios";
import { useState } from "react";
import LoginManager from "./loginManager";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import Head from "next/head";
import ChallengeTest from "./challenge-test";
import CodeEditorWindow from "./code-editor-window";

export default function CreateChallenge() {
  const [challengeTitle, setChallengeTitle] = useState("");
  const [challengeDesc, setChallengeDesc] = useState("");
  const [tests, setTests] = useState([]);
  const [functionName, setFunctionName] = useState("");
  const [templateCode, setTemplateCode] = useState("");

  function handleCreateChallengeButtonClick() {
    const token = localStorage.getItem("SignInToken");

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/challenges`, {
      title: challengeTitle,
      desc: challengeDesc,
      tests: tests,
      rewards: [],
      functionName: functionName,
      args: tests[0].stdin.split("|").length, 
      templateCode: templateCode,
      token: token
    }).then((response) => {
      if (!response.data.error) {
        Router.push(`/challenges/${response.data.response.insertedId}`);
      } else {
        console.log(response.data.error);
      }
    }).catch((e) => { console.log(e); });
  }



  function handleTestsUpdate (testStdIn, testStdOut, index) {
    let newTests = [...tests];
    newTests[index] = {"stdin": testStdIn, "stdout": testStdOut};
    setTests(newTests);
  }


  function onCodeChange(action, data) {
    if (action == "code") {
      setTemplateCode(data);
    } else {
      console.log(`unhandled action case: ${action}`);
    }
  }

  return (
    <>
      <Head>
        <title>Create Challenge</title>
      </Head>
      <LoginManager />
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Create Challenge</span>
      </div>
      <h2 className="dark:text-slate-400">Title</h2>
      <textarea id="challengeTitle" value={challengeTitle} onChange={(e) => { setChallengeTitle(e.target.value) }} />
      <h2 className="dark:text-slate-400">Description</h2>
      <textarea id="challengeDesc" value={challengeDesc} onChange={(e) => { setChallengeDesc(e.target.value) }} />
      <h2 className="dark:text-slate-400">Function name</h2>
      <textarea id="challengeDesc" value={functionName} onChange={(e) => { setFunctionName(e.target.value) }} />
      <ChallengeTest changeEvent={handleTestsUpdate} index={0} />
      <h2  className="dark:text-slate-400">template code:</h2>
      <CodeEditorWindow onChange={onCodeChange} language="javascript" code={templateCode} theme="vs-dark" />
      <button className="dark:text-slate-400" onClick={handleCreateChallengeButtonClick}>Create challenge</button>
    </>
  )
}
