import React from "react"
import * as styles from "./css/mystyles.scss"

export const HelloWorld: React.FunctionComponent = () => {
    return (
        <h1 className={styles.helloWorldMessage} 
            style={{ color: process.env.COLOR }}>
                {process.env.WELCOME_MESSAGE}
        </h1>
    )
}