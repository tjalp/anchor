import React, { Component, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from "axios";

function GoogleLogin() {

    const [user, setUser] = useState(null);

    function handleGooleLoginCallbackResponse(googleResponse) {
        login(googleResponse.credential);
    }

    function login(credential) {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, { token: credential }).then((response) => {
            if (!response.data.error) {

                localStorage.setItem("SignInInfo", credential);
                setUser(jwt_decode(credential));
            } else {
                if (response.data.reLogin) {
                    localStorage.removeItem("SignInInfo");
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
        google.accounts.id.initialize({
            client_id: '410755111991-4ceee20ibrsiq23097qe1sohltafi3e3.apps.googleusercontent.com',
            callback: handleGooleLoginCallbackResponse
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large"});


        const signInfo = localStorage.getItem("SignInInfo");
        if (signInfo) {
            login(signInfo);
        }
    }, []);

    function handleSignOut(event) {
        setUser(null);
        localStorage.removeItem("SignInInfo");
    }

    
    return (<div>
        <div id="signInDiv" hidden={user ? true : false}></div>

        <button id="signOutButton" style={{color: "gray"}} onClick={(e) => handleSignOut(e)} hidden={user ? false : true}>Sign out</button>
        <h2 id="welcomeText" style={{color: "gray"}} hidden={user ? false : true}>Hallo {user ? user.given_name : "(uitgelogd)"}</h2>
        </div>);
}

export default GoogleLogin;