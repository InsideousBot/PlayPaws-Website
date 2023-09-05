import React from "react"
import LoginButton from "./LoginButton"

export default function LoginPage() {
    return (
        <div className="loginPage">
            <LoginButton img="./images/googleIcon.png" content = "Login in with Google"></LoginButton>
        </div>
    );
}