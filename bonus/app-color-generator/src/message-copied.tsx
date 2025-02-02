import React, { useEffect, useState } from "react";

interface MessageCopiedProps {
    color: string;
}

export const MessageCopied: React.FC<MessageCopiedProps> = (props) => {
    const { color } = (props)
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        const isColorSelected=color !== '';
        setVisible(isColorSelected);
        if (isColorSelected) {
            setTimeout(() => {
                setVisible(false);
            }, 2500);
        }
    }, [color])



    return (<div className="container-message-copied">
        {visible && <div className="message-copied">
            {`Color ${color} copied to your clipboard`}
        </div>}
        {!visible && <div className="no-message">
            {`Color ${color} copied to your clipboard`}
        </div>}
    </div>)

}