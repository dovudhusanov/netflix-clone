import React from 'react';
import "./login.css"
import {signInWithGoogle} from "../../firebase/config.jsx";

function LogIn() {
    return (
        <div className="login">
            <div>
                <img src="./image/logo.png" alt="logo"/>
                <button onClick={signInWithGoogle}>Sign in With Google</button>
            </div>
        </div>
    )
}

export default LogIn;