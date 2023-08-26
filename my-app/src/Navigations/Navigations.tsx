import React, { Suspense, lazy } from 'react';
/**
 * Routes
 */
import { Route, Routes } from "react-router-dom";


const WelcomePage = lazy(() => import('../Pages/WelcomePage/WelcomePage'));
const LogIn = lazy(() => import('../Pages/Login/index'))

export const Navigation: React.FC = () => (
     <Suspense fallback={null}>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path='/log-in' element={<LogIn />}/>
            <Route path='/registration' element={<></>}/>
        </Routes>
    </Suspense>

)