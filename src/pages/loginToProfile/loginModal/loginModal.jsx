import React, {useEffect, useRef, useState} from 'react';
import "./loginModal.css"

let currentOTPIndex = 0

function LoginModal({setLogin, setModal, modal, login}) {

    const [otp, setOtp] = useState(new Array(4).fill(""))
    const [activeOTPIndex, setActiveOTPIndex] = useState(0)
    const [error, setError] = useState(false)

    const inputRef = useRef(null)

    const handleOnChange = (e) => {
        const {value} = e.target
        const newOTP = [...otp]
        newOTP[currentOTPIndex] = value.substring(value.length - 1)

        value ? setActiveOTPIndex(currentOTPIndex + 1) :
            setActiveOTPIndex(currentOTPIndex - 1)

        setOtp(newOTP)
    }

    const handleOnKeyDown = (e, index) => {
        currentOTPIndex = index
        if (e.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (otp.join("") === "6666") {
            setLogin(true)
        } else {
            setError(true)
            setOtp(["", "", "", ""])
            setActiveOTPIndex(0)
        }
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [modal, activeOTPIndex])

    return (
        <div className={modal ? "login-to-profile-modal modal-active" : "login-to-profile-modal"}>
            <i className="fa-regular fa-xmark-large close-login-modal" onClick={() => setModal(false)}></i>
            <div>
                <h4>Profile Lock is currently on.</h4>
                {error ? <h1 className="error-title-modal">Whoops, wrong PIN. Please try again</h1> :
                    <h1>Enter your PIN to access this profile.</h1>}
                <form className={error ? "modal-otp-input modal-otp-input-error" : "modal-otp-input"}
                      onSubmit={handleSubmit}>
                    {otp.map((_, index) => (
                        <input
                            key={index}
                            ref={index === activeOTPIndex ? inputRef : null}
                            type="password"
                            onChange={handleOnChange}
                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                            value={otp[index]}
                        />
                    ))}
                    <button type={"submit"} style={{display: "none"}}/>
                </form>
                {/*<p>Lock the input</p>*/}
            </div>
        </div>
    );
}

export default LoginModal;