import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from '../components/layouts/default';
import Head from "next/head";
import AnchorCard from "../components/anchor-card";
import SideBar from "../components/sideBar"

export default function iets(){
    
    return(
        <>
        <Head>
          <title>⚓Anchor</title>
        </Head>
        <SideBar></SideBar> 
      </>
    )
}