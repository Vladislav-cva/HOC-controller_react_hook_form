import React, { SyntheticEvent } from 'react';
import { FieldValueProps } from '../FormFieldController/FormFieldController';
import css from './style.module.css'
/**
 * Expo
 */

export interface FieldProps {
    label?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isRequired?: boolean;
    isOptional?: boolean;
    validationMessage?: string;
    info?: string;
    onBlur?(event: React.SyntheticEvent<HTMLElement>): void;
}

export type TTextInputProps = FieldProps &
    FieldValueProps<string> & {
        value: string;
        type?: string;
        maxLength?: number;
        placeholder?: string;
        autoFocus?: boolean;
        name: string;
        id: string;
    };


export const Input:React.FC<TTextInputProps> = ({
    label,
    name, 
    onValueChange,
    type,
    placeholder,
    value = '',
    id
}) => {
    const test = (inputValue: any) => {
        if(onValueChange){
            onValueChange(inputValue)
        }
    }
    return(
    <>
    { label && <label htmlFor={id}>{label}</label> }
        <input
            value={value}
            placeholder={placeholder}
            type={type}
            id={id}
            onChange={test}
            name={name}
            className={css.input}
        />
    </>
)}