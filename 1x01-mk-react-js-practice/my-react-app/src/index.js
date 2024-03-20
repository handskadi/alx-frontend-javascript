import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const brand = "Mkweb";
const currentDate = new Date();
console.log(currentDate);
const currentYear = currentDate.getFullYear();
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
  <p>Created by Mohamed KADI</p>
  <p>Copyright - {brand} - {currentYear}</p>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
