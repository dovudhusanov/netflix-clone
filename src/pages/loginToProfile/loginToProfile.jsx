import React, {useState} from 'react';
import "./loginToProfile.css"
import LoginModal from "./loginModal/loginModal.jsx";

function LoginToProfile({user, setLogin, login}) {

    const [modal, setModal] = useState(false)

    return (
        <>
            <div className={modal ? "login-to-profile login-to-profile-active" : "login-to-profile"}>
                <div>
                    <h1 className="login-to-profile-title">Who's watching?</h1>
                    <div className="login-profile-cards">
                        <div className="login-profile-card" onClick={() => setModal(true)}>
                            <img src={user.photoURL} alt={user.displayName}/>
                            <span>{user.displayName.slice(0, 8)}</span>
                            <i className="fa-regular fa-lock-keyhole lock-profile-icon"></i>
                        </div>
                        <div className="login-profile-card" onClick={() => setLogin(true)}>
                            <img src="./image/img.png" alt={"Kewin"}/>
                            <span>Kewin</span>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal
                setLogin={setLogin}
                setModal={setModal}
                modal={modal}
                login={login}
            />
        </>
    );
}

export default LoginToProfile;