import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonType & {
    callBack?: () => void
}
export const Button: React.FC<PropsType> = (props) => {


    const {callBack, disabled, className, title, ...restProps} = props

    const onClickButtonHandler = () => {

        callBack && callBack()

    }

    return (
        <button className={className ? className : ''}
                onClick={onClickButtonHandler}
                disabled={disabled}
                {...restProps}>{title} </button>
    )
}