import React from 'react'
import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-outline'
]

const SIZES = [
    'btn-medium',
    'btn-large'
]

export const Button = ({
    children,
    type,
    onclick,
    buttonStyles,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
            {children}
        </button>
    )
}

