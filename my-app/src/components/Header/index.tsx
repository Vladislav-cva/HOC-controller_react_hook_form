import React from 'react';

import css from './style.module.css'

export const Header = () => {
    return(
        <header className={css.header}>
            <nav>
                <ul>
                    <li>
                        first
                    </li>
                    <li>
                        second
                    </li>
                    <li>
                        third
                    </li>
                </ul>
            </nav>
        </header>
    )
}