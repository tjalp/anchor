import React, { Component, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function GoogleLogin() {

    const [user, setUser] = useState(null);

    function handleCallbackResponse(response) {
        login(jwt_decode(response.credential));
        localStorage.setItem("SignInInfo", response.credential);    
    }

    function login(userInfo) {
        setUser(userInfo);
    }

    function handleSignOut(event) {
        setUser(null);
        localStorage.removeItem("SignInInfo");
    }

    useEffect(() => {
        var signInInfo = localStorage.getItem("SignInInfo");
        if (signInInfo != null) {
            login(jwt_decode(signInInfo));
        }
        /* global google*/
        google.accounts.id.initialize({
            client_id: "410755111991-4ceee20ibrsiq23097qe1sohltafi3e3.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
    }, []);

    
    return (<div>
        <div id="signInDiv" hidden={user ? true : false}></div>
        <button id="signOutButton" style={{color: "gray"}} onClick={(e) => handleSignOut(e)} hidden={user ? false : true}>Sign out</button>
        <h2 id="welcomeText" style={{color: "gray"}} hidden={user ? false : true}>Hallo {user ? user.given_name : "(uitgelogd)"}</h2>
        </div>);
}

export default GoogleLogin;