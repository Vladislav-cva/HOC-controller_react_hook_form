import React from 'react';
import './index.css'

type TButton =  {
    nameOfButton: string
    className?: string
    handleClick: () => void
    type?: "button" | "submit" | "reset" 
}

export const MyButton:React.FC<TButton> = ({nameOfButton, type, className, handleClick}) => {
    return (
        <button 
            type={type}
            className={className ? className : 'button-wrapper'}
            onClick={handleClick}
        >
            {nameOfButton}
        </button>
    )
} 