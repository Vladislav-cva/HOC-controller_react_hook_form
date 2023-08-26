

 import React from 'react';
 /**
  * Components
  */
 import { Controller, useFormContext } from 'react-hook-form';
/**
 * Types
 */
 import { ValidateResult, ValidationRule } from 'react-hook-form';
 /**
  * Expo
  */
  export interface FieldValueProps<T> {
    value: T;
    onValueChange: (newValue: any) => void;
}
 export type TPropsWithoutValue<TProps, TValue> = Omit<
     TProps,
     keyof FieldValueProps<TValue>
 >;
 
 export type TFieldControllerProps<TProps, TValue> = {
     name: string;
     isRequired?: boolean;
     defaultValue?: TValue;
     pattern?: ValidationRule<RegExp>;
     validate?: (value: TValue) => ValidateResult;
    //  component: FC<
    //      Omit<
    //          TFieldControllerProps<TProps, TValue> &
    //              TPropsWithoutValue<TProps, TValue>,
    //          keyof TFieldControllerProps<TProps, TValue>
    //      > |
    //          FieldValueProps<TValue> & {
    //              isInvalid?: boolean;
    //              isRequired?: boolean;
    //              validationMessage?: string;
    //          }
    //  >;
    component: any
 };
 /**
  * Expo
  */
 export const FieldController = <TProps, TValue = string>({
     name,
     pattern,
     validate,
     defaultValue,
     isRequired = false,
     component: Component,
     ...props
 }: TFieldControllerProps<TProps, TValue> &
     TPropsWithoutValue<TProps, TValue>): JSX.Element => {
     const { control } = useFormContext();
 
     return (
         <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={{
                pattern,
                validate,
                required: {
                    value: isRequired,
                    message: '',
                },
            }}
            render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
             }) => (
                <Component
                    {...props}
                    value={value}
                    onBlur={onBlur}
                    isRequired={isRequired}
                    onValueChange={onChange}
                    validationMessage={error?.message}
                />
            )}
        />
    );
};
 