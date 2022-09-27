import axios from "axios";
import { useState } from "react";
import LoginManager from "./loginManager";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import Head from "next/head";
import ChallangeTest from "./challenge-test";

export default function CreateChallange() {
  const [challangeTitle, setChallangeTitle] = useState("");
  const [challangeDesc, setChallangeDesc] = useState("");
  const [tests, setTests] = useState([]);

  function handleCreateChallangeButtonClick() {
    const token = localStorage.getItem("SignInToken");

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/challanges`, {
      title: challangeTitle,
      desc: challangeDesc,
      tests: tests,
      rewards: [],
      token: token
    }).then((response) => {
      if (!response.data.error) {
        Router.push(`/challanges/${response.data.response.insertedId}`);
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


  return (
    <>
      <Head>
        <title>Create Challange</title>
      </Head>
      <LoginManager />
      <div className="text-7xl text-center m-6 text-black dark:text-slate-400">
        <span className="font-black bg-gradient-to-br from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">Create Challange</span>
      </div>
      <h2 className="dark:text-slate-400">Title</h2>
      <textarea id="challangeTitle" value={challangeTitle} onChange={(e) => { setChallangeTitle(e.target.value) }} />
      <h2 className="dark:text-slate-400">Content</h2>
      <textarea id="challangeDesc" value={challangeDesc} onChange={(e) => { setChallangeDesc(e.target.value) }} />
      <ChallangeTest changeEvent={handleTestsUpdate} index={0} />
      <button className="dark:text-slate-400" onClick={handleCreateChallangeButtonClick}>Create challange</button>
    </>
  )
}
