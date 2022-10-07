import React, { useState } from "react";
export default function SideBar(){
    
    const [style, setStyle] = useState("m-2 p-4 text-xl border border-offset-5 border-transparent rounded-lg bg-gradient-to-r hover:from-slate-300 hover:to-slate-200")
    
    return(
        <div className="float-left object-scale-down bg-slate-50 outline outline-1 outline-slate-300 outline-offset-2 grid divide-y select-none">
            <div className="">
                <div className="m-5 text-3xl font-black bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent"><a href="/home">⚓Anchor.</a></div>
                <div className={style}><a>Home</a></div>
                <div className={style}><a>Posts</a></div>
                <div className={style}><a>Challenges</a></div>
                <div className={style}><a>Tutorials</a></div>
            </div>
            <div>hoi</div>
          </div>
    )
}