import REact, { useEffect, useState } from "react";
import axios from "axios";
import Layout from '../components/layouts/default';

export default function iets(){
    
    return(
        <div>
            <textarea id="codeInput" rows="4" cols="50" placeholder="Voer hier je code in" onKeyDown={(event)=>{
                if(event.key == "Tab"){
                    console.log("hi")
                }
            }}></textarea>

            <div>
                <button id="runButton" onClick={()=>{
                    eval(codeInput.value)
                }}>run</button>
            </div>
        </div>
    )
}