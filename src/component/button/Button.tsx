import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonType & {
    callBack?: () => void
}
export const Button: React.FC<PropsType> = (props) => {


    const {callBack, disabled, className, title, ...restProps} = props


    return (
        <button className={className ? className : ''}
                onClick={callBack}
                disabled={disabled}
                {...restProps}>{title}
        </button>
    )
}