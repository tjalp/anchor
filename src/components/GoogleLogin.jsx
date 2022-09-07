import React, { Component, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function GoogleLogin() {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        var userInfo = jwt_decode(response.credential);
        setUser(userInfo);
        document.getElementById("signInDiv").hidden = true;
        document.getElementById("welcomeText").hidden = false;
        document.getElementById("signOutButton").hidden = false;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        document.getElementById("welcomeText").hidden = true;
        document.getElementById("signOutButton").hidden = true;
    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "410755111991-4ceee20ibrsiq23097qe1sohltafi3e3.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
    });

    

    return (<div>
        <div id="signInDiv"></div>
        <button id="signOutButton" style={{color: "gray"}} onClick={(e) => handleSignOut(e)} hidden={true}>Sign out</button>
        <h2 id="welcomeText" style={{color: "gray"}} hidden={true}>Hallo {user.given_name}</h2>
        </div>);
}

export default GoogleLogin;