import React, { Component, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useRouter } from 'next/router';

function GoogleLogin() {

    const [user, setUser] = useState(null);
    const Router = useRouter();
    const [googleLoaded, setGoogleLoaded] = useState(true);

    function handleGooleLoginCallbackResponse(googleResponse) {
        login(googleResponse.credential);
    }

    function login(credential) {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, { token: credential }).then((response) => {
            if (!response.data.error) {

                localStorage.setItem("SignInToken", credential);
                setUser(jwt_decode(credential));
                if (Router.query.r) {
                    Router.push(Router.query.r);
                }
            } else {
                if (response.data.reLogin) {
                    localStorage.removeItem("SignInToken");
                    setUser([]);
                    console.log("Please log in again!");
                }
                console.error(response.data.error);
            }
        }).catch((e) => {
            console.error(e);
        });
    }

    useEffect(() => {
        if (typeof google != "undefined") {
            
            google.accounts.id.initialize({
                client_id: '410755111991-4ceee20ibrsiq23097qe1sohltafi3e3.apps.googleusercontent.com',
                callback: handleGooleLoginCallbackResponse
            });
            google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large"});


            const signInfo = localStorage.getItem("SignInToken");
            if (signInfo) {
                login(signInfo);
            }
        } else {
            setGoogleLoaded(false);
        }
    }, []);

    function handleSignOut(event) {
        setUser(null);
        localStorage.removeItem("SignInToken");
    }

    
    return (<div>
        <div id="signInDiv" hidden={user ? true : false}></div>

        <button id="signOutButton" style={{color: "gray"}} onClick={(e) => handleSignOut(e)} hidden={user ? false : true}>Uitloggen</button>
        <h2 id="welcomeText" style={{color: "gray"}} hidden={user ? false : true}>Hallo {user ? user.given_name : "(uitgelogd)"}</h2>
        <p hidden={googleLoaded} className="text-slate-50">Google login is gefaalt om in te laden, misschien heb je een extentie die Google blokeert.</p>
        </div>);
}

export default GoogleLogin;