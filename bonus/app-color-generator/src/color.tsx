import React from "react";


interface ColorProp {
    color: string,
    colorSelected: string;
    changeColorSelected: (color: string) => void
}

export const Color: React.FC<ColorProp> = (props) => {
    const { color, colorSelected, changeColorSelected } = props

    const handleClick = () => {
        navigator.clipboard.writeText(color);
        changeColorSelected(color);
    }

    return (
        <div className="container-color" style={{ backgroundColor: color }} onClick={handleClick}>
            <span style={{ fontWeight: color === colorSelected ? 'bolder' : 'normal' }} onClick={handleClick}>
                {color}
            </span>
        </div>
    )
}