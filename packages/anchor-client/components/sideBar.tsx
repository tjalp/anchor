import Link from "next/link";
import React, { useState } from "react";
export default function SideBar(){
    
    const [style, setStyle] = useState("m-2 p-4 text-xl border border-offset-5 border-transparent rounded-lg bg-gradient-to-r hover:from-slate-300 hover:to-slate-200")
    
    return(
        <div className="float-left object-scale-down bg-slate-50 outline outline-1 outline-slate-300 outline-offset-2 grid divide-y select-none">
            <div className="">
                <div className="m-5 text-3xl font-black bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent"><Link href="/home">⚓Anchor.</Link></div>
                <Link href="./"><div className={style}>Home</div></Link>
                <Link href="./posts"><div className={style}>Posts</div></Link>
                <Link href="./challenges"><div className={style}>Challenges</div></Link>
                <Link href="./tutorials"><div className={style}>Tutorials</div></Link>
            </div>
            <div className="hover:text-xl">hoi</div>
          </div>
    )
}