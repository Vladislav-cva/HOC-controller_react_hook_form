import React from 'react';
/**
 * Components
 */
import App from './App';
/**
 * Router
 */
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
/**
 * Assets
 */
import './index.css';
// import { createBrowserHistory } from 'history';


// const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

