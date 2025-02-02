import React from "react";
import { Palette } from "./palette";

export const App: React.FC = () => {
    return (
        <div className="container">
            <h2 className="title">Color generator</h2>
            <Palette />
        </div>
    )
}