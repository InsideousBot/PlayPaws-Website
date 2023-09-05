import React from "react"

export default function LoginButton(props) {
    return (
        <div className="loginButtonDiv">
            <button type="button" class="loginButton">
                <img src={props.img} className="loginButtonImage" width="50px" alt="Google Logo"/>
                <p className="loginButtonText">{props.content}</p>
            </button>
        </div>
    );
}