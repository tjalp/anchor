import Link from "next/link";
import React, { useState } from "react";
export default function SideBar(){
    
    const [buttonStyle] = useState("m-2 p-4 text-xl dark:text-white border border-offset-5 border-transparent rounded-lg hover:bg-slate-200 dark:hover:bg-neutral-600 cursor-pointer")
    const [dropMenuStyle] = useState("p-4 text-lg dark:text-white border border-offset-4 border-transparent rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700 cursor-pointer")

    return(
        <div className="object-left-top max-w-min mr-16 object-scale-down bg-slate-50 dark:bg-neutral-900 outline outline-1 outline-slate-300 dark:outline-neutral-600 outline-offset-2">
            <div>
                <div className="p-5 text-3xl font-black bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent"><Link href="/home">⚓Anchor.</Link></div>
                <Link href="./"><div className={buttonStyle}>Home</div></Link>
                <Link href="./posts"><div className={buttonStyle}>Posts</div></Link>
                <Link href="./challenges"><div className={buttonStyle}>Challenges</div></Link>
                <Link href="./tutorials"><div className={buttonStyle}>Tutorials</div></Link>
            </div>
            <div className="absolute bottom-0 m-2 p-2">
                <div className="flex flex-col-reverse">
                    <div className="peer p-4 text-xl dark:text-white border border-offset-5 border-transparent rounded-lg hover:bg-slate-200 dark:hover:bg-neutral-700">≡ Meer</div>
                    <div className="peer hidden peer-hover:block hover:block bg-slate-200 dark:bg-neutral-800">
                        <Link href="./settings"><div className={dropMenuStyle}>Instellingen</div></Link>
                        <Link href="./login?r=/home"><div className={dropMenuStyle}>Uit loggen</div></Link>
                    </div>
                </div>
            </div>       
        </div>
    )
}