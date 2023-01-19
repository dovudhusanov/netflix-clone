import React, {useState} from 'react';
import LoginToProfile from "./loginToProfile/loginToProfile.jsx";
import Main from "./main.jsx";

function LoginProfile({user}) {

    const [login, setLogin] = useState(false)

    return (
        <>
            {login ? <Main user={user} setLogin={setLogin}/> : <LoginToProfile user={user} setLogin={setLogin} login={login}/>}
        </>
    );
}

export default LoginProfile;