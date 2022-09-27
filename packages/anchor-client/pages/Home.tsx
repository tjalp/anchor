import REact, { useEffect, useState } from "react";
import axios from "axios";
import Layout from '../components/layouts/default';
import Head from "next/head";
import AnchorCard from "../components/anchor-card";

export default function iets(){
    
    return(
        <>
        <Head>
          <title>⚓Anchor</title>
        </Head>
        <div className="ml-3 mt-3 outline outline-1 outline-slate-300 rounded">
            <span className="font-black bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-transparent">⚓Anchor.</span>
        </div>
      </>
    )
}