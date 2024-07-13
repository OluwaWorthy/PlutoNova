import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Checkout from './Components.js/Checkout.js';
import  Cart from './Components.js/Cart.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        <Routes>
            <Route exact path="/Components.js/Cart.js" component={<Cart/>} />
            <Route exact path="/Components.js/Checkout.js" component={<Checkout/>}/>
            <Route exact path="/App" component={<App/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
