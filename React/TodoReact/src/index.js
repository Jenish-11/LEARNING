import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bar from './src-2/bar'
import reportWebVitals from './reportWebVitals';
import RouterPro from './Router/RouterPro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Bar/> */}
    <RouterPro/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
