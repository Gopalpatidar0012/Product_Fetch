import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './Rating_Project/App1';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HalfRating from './Rating_Project/HalfRating';
import LikeApp from "./Like_Button/LikeApp"
import RHalf from "./Rating_Project/RHalf";

ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
