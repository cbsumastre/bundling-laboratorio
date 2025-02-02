import React, { useEffect, useState } from "react";
import { MessageCopied } from "./message-copied";
import { Color } from "./color";
import { fetchRandomPalette } from "./api";

export interface ApiColorResponse {
    result: number[][]
}

export const Palette: React.FC = () => {

    const [colors, setColors] = useState<string[]>()
    const [colorSelected, setColorSelected] = useState<string>('');

    console.log('render palette',colorSelected, colorSelected !== '')

    const handleClick = async () => {
        try {
            const colors=await fetchRandomPalette();
            setColors(colors)
        }
        catch (e) {
            console.error(e)
            setColors([])
        }
    }

    useEffect(() => {
        handleClick()
    }, []);

    const changeColorSelected = (color: string) => {
        setColorSelected(color);
    }

    return (
        <>
            <MessageCopied color={colorSelected}/>
            <div className="container-colors">
                {
                    colors?.map((color
                    ) => <Color color={color} colorSelected={colorSelected} changeColorSelected={changeColorSelected} key={color}/>)
                }
            </div>
            <button onClick={handleClick} className="btnGeneratePalette">Generate color palette</button>

        </>
    )
}