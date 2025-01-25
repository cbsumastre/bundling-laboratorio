import React from "react"
import {createRoot} from "react-dom/client"
import { HelloWorld } from "./hello-world";

import * as styles from "./css/mystyles.scss";



const root = createRoot(document.getElementById("root"))
root.render(
    <div className={styles.mainContainer}><HelloWorld/></div>
);
