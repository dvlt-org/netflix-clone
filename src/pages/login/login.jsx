import { useState, useRef } from "react"
import "./login.css"

const logo_img = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png`


export default function login() {


    return (
        <div className='login'>
            <div className="login-navbar">
                <img className="login-navbar__logo" src={logo_img} alt="" />
                <button className="login-navbar__button">
                    Sign In
                </button>
            </div>
            <div className="login-container">
                <form className="login-container__form">
                    <h1 className="login-form__title">Sign In</h1>
                    <input className="login-form__input"  type="email" placeholder="Email or Password" />
                    <input className="login-form__input" type="password" placeholder="Password" />
                    <button className="login-form__button">sign in</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
