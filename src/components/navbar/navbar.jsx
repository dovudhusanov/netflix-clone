import React, {useEffect, useState} from 'react';
import "./navbar.css"
import {auth} from "../../firebase/config.jsx";

function Navbar({user, setLogin}) {
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setFixed(true) : setFixed(false)
        })
    }, [])


    return (
        <div className={fixed ? "navbar fixed" : "navbar"}>
           <div className="nav">
               <img src="./image/logo.png" alt="logo" className="logo"/>
               <div className="user-image-nav">
                   <a className="authButton" onClick={() => auth.signOut()}>
                       Log out
                   </a>
                   <a className="authButton" onClick={() => setLogin(false)}>change account</a>
                   <img src={user.photoURL} alt="auth user" className="userImage"/>
               </div>
           </div>
        </div>
    );
}

export default Navbar;