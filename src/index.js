import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import ShowSubscriber from './ShowSubscriber';
import reportWebVitals from './reportWebVitals';
//import AddSubscriber from './AddSubscriber';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';
ReactDOM.render(

  <PhoneDirectory/>,document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
