import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FieldController } from '../../components/FormFieldController/FormFieldController';
import { Input, TTextInputProps } from '../../components/Input';
import { PageContainer } from '../../components/PageWrapper/PageWrapper';
import { FormProvider } from 'react-hook-form';

/**
 * Assets
 */
import css from './style.module.css'
import { MyButton } from '../../components/Button/Button';

type TData = {
    email: string;
    password: string
}

const LogIn: React.FC = () => {
    const methods = useForm<TData>();
    
    const handleSubmit = methods.handleSubmit((data) => {
         console.log(data);
   });

    return(
        <PageContainer renderHeader={()=> <h1>Action Log</h1>}>
            <FormProvider {...methods}>
                <div className={css.logInContainer}>
                    <FieldController<any>
                        name='email'
                        placeholder='email'
                        type='text'
                        defaultValue=''
                        component={Input}
                    />
                    
                    <FieldController<any> 
                        name='password'
                        type='text'
                        placeholder='password'
                        component={Input}
                        defaultValue=''
                    />
                    <MyButton type='submit' nameOfButton='submit' handleClick={handleSubmit} />
                </div>
            </FormProvider>
         
        </PageContainer>
    )
}

export default LogIn