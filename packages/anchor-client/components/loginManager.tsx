import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function LoginManager() {

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const token = localStorage.getItem("SignInToken");
            if (token) {
                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, { token: token }).then((response) => {
                    if (!response.data.error) {
                        console.log("Verified identity successfully!");
                    } else {
                        console.log(response.data.error);
                        router.push(`/login?r=${router.pathname}`);
                    }
                }).catch((e) => {
                    console.log(e);
                    router.push(`/login?r=${router.pathname}`);
                });
            } else {
                router.push(`/login?r=${router.pathname}`);
            }
        }
    }, [router.isReady])


    return (<div></div>)
}