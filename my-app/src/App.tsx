import React from 'react';
/**
 * Components
 */
import { Navigation } from './Navigations/Navigations';
/**
 * Assets
 */
import './App.css';
import { Header } from './components/Header';
/**
 * 
 * Expo
 */
function App() {
  return (
    <div className='app'>
        <div className="header">
          <Header />
        </div>
        <div className='pageContainer'>
            <Navigation />
        </div>
        <div className='footer'>
            <div>footer</div>
        </div>
    </div>
  );
}

export default App;
