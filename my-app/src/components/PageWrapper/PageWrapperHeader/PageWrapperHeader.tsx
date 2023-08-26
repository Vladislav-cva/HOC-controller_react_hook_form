import React from 'react';

import { TWrapperPAgeHeader } from './type';

import css from  './style.module.css'

export const PageWrapperHeader = ({
    renderHeader,
    renderBackTo,
}: TWrapperPAgeHeader) => {
    return(
        <div className={css.content}> 
            { renderBackTo?.() }
            {  renderHeader() }
        </div>
    )
}