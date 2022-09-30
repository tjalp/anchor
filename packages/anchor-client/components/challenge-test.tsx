import { useState } from "react"



export default function ChallengeTest({ changeEvent, index }) {
    const [testStdIn, setTestStdIn] = useState("");
    const [testStdOut, setTestStdOut] = useState("");

    return (<div>
        <h2 className="dark:text-slate-400">Test</h2>
        <p className="dark:text-slate-400">STD in:</p>
        <textarea value={testStdIn} onChange={(e) => {
            setTestStdIn(e.target.value);
            changeEvent(e.target.value, testStdOut, index);
        }} />
        <p className="dark:text-slate-400">STD out:</p>
        <textarea value={testStdOut} onChange={(e) => {
            setTestStdOut(e.target.value);
            changeEvent(testStdIn, e.target.value, index);
            }} />
    </div>)
}
