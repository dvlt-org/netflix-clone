import { useState, useRef } from "react"
import "./register.css"

const logo_img = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png`


export default function register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleEmail = () => {
        setEmail(emailRef.current.value)
    }

    const handlePassword = () => {
        setPassword(passwordRef.current.value)
    }

    console.log(email)
    console.log(password)
    return (
        <div className='register'>
            <div className="register-navbar">
                <img className="register-navbar__logo" src={logo_img} alt="" />
                <button className="register-navbar__button">
                    Sign In
                </button>
            </div>
            <div className="register-container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="register-container__inputs">
                    {email ?
                        (
                            <>
                                <input className="register-inputs__input" ref={passwordRef} type="password" placeholder="Enter your password" />
                                <button className="register-inputs__button" onClick={handlePassword}>Start</button>
                            </>
                        ) : (
                            <>
                                <input className="register-inputs__input" ref={emailRef} type="email" placeholder="Enter your email addres" />
                                <button className="register-inputs__button" onClick={handleEmail}>Get Started</button>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}
