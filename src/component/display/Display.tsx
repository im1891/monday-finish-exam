import React from "react";
import s from './Display.module.css'

type PropsType = {
    count: number
}

export const Display: React.FC<PropsType> = (props) => {

    const {count} = props;

    return (
        <div className={`${s.display} ${count === 5 ? s.enough : ''}`}>
            {count}
        </div>
    )
}