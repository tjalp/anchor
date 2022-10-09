import Link from "next/link";
import React, { useState } from "react";
export default function SideBar(){
    
    const [buttonStyle, setStyle] = useState("m-2 p-4 text-xl border border-offset-5 border-transparent rounded-lg hover:bg-slate-200")
    
    return(
        <div className="float-left mr-10 object-scale-down bg-slate-50 outline outline-1 outline-slate-300 outline-offset-2 grid grid-rows-2 divide-y select-none">
            <div>
                <div className="m-5 text-3xl font-black bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent"><Link href="/home">⚓Anchor.</Link></div>
                <Link href="./"><div className={buttonStyle}>Home</div></Link>
                <Link href="./posts"><div className={buttonStyle}>Posts</div></Link>
                <Link href="./challenges"><div className={buttonStyle}>Challenges</div></Link>
                <Link href="./tutorials"><div className={buttonStyle}>Tutorials</div></Link>
            </div>
            <div className="mt-80">
                <div className="m-2 p-4 border border-offset-5 border-transparent rounded-lg hover:bg-slate-200 group">
                    <p id="p" className="hidden group-hover:block">hallo</p>
                    Ξ Meer
                </div>
            </div>
        </div>
    )
}