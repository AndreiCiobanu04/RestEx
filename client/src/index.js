import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore}  from 'redux'
// //STORE -> Globalized state


// //ACTION ->  Transform the state in the next state describes the action u wanna do
// // it s a afunction that returns an object

// const increment =() => {
//   return {
//     type: 'INCREMENT' 
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //Reducer -> 
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT' : return state + 1;
//     case 'DECREMENT' : return state -1;
//   }
// }

// let store = createStore(counter);



// //Dispatch -> send the action to the reducer 
// store.dispatch(increment());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
