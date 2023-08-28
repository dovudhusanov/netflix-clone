import {useState, useEffect} from 'react'
import './App.css'
import firebase from "./firebase/config";
import LoginProfile from "./pages/loginProfile.jsx";
import LogIn from "./pages/signIn/logIn";

function App() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])

    return (
        <>
            {!user ? <LoginProfile user={user}/> : <LogIn />}
        </>
    )
}

export default App
