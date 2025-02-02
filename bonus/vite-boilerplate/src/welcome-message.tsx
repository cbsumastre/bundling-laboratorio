import React from "react";

import "./css/styles.scss"
import logo from './img/logo.png';

export const WelcomeMessage: React.FC = () => {
    return (
        <>
            <div className="container">
                <img src={logo} alt="Vite Logo" className="logo" />
                <h2>{import.meta.env.VITE_WELCOME_MESSAGE}</h2>
            </div>
        </>
    )
}