import "./css/styles.scss"

import React from "react";

export const WelcomeMessage: React.FC = () => {
    return (
        <>
            <div className="container">
                <img src="./src/img/logo.png" alt="Vite Logo" className="logo" />
                <h2>{import.meta.env.VITE_WELCOME_MESSAGE}</h2>
            </div>
        </>
    )
}