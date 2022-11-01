import { useState } from "react"



export default function ChallengeTest({ changeEvent, index, testsArray }) {

    return (<div>
        
        <p className="dark:text-slate-400">Test {index} input:</p>
        <textarea  onChange={(e) => {
            let newTestsArray = testsArray.slice();
            newTestsArray[index].stdin = e.target.value;
            changeEvent(testsArray);
            //console.log(testsArray);
        }} />
        
        <p className="dark:text-slate-400">Test {index} output:</p>
        <textarea  onChange={(e) => {
            let newTestsArray = testsArray.slice();
            newTestsArray[index].stdout = e.target.value;
            changeEvent(testsArray);
            //console.log(testsArray);
        }} />   
        <br />
    </div>)
}
