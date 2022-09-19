import React, { Component, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { generateKeyPair } from 'crypto';

function GoogleLogin() {

    const [user, setUser] = useState(null);

    function handleGooleLoginCallbackResponse(googleResponse) {
        
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth`, { token: googleResponse.credential }).then((response) => {
            if (!response.data.error) {
                console.log(response.data);
            } else {
                console.error(response.data.error);
            }
        });

        localStorage.setItem("SignInInfo", googleResponse.credential);    
    }



    useEffect(() => {
        google.accounts.id.initialize({
            client_id: '410755111991-4ceee20ibrsiq23097qe1sohltafi3e3.apps.googleusercontent.com',
            callback: handleGooleLoginCallbackResponse
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large"});
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