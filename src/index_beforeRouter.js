import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
//import reportWebVitals from './reportWebVitals';

//ReactDom. render takes two args:
  // 1. first arg is what content we want to create
// 2. second arg is where we want to put that content.
/**ReactDOM.render(
  React.createElement("h1",{style:{color:"blue"}},"Heyyy Everyone"),
  document.getElementById('root')
);**/

function AppTwo(){
  return (
    <h1> this is the second app</h1>
  );
}

ReactDOM.render(
  /**React.createElement("ul",null,
  React.createElement("li",null,"Monday"),
  React.createElement("li",null,"Tuesday"),
  React.createElement("li",null,"Wednesday")),**/
  //jsx syntax
  /**<ul>
  <li>Monday</li>
  <li>Tuesday</li>
  </ul>,**/
  //import the component in top section
  //<> </> is the short form of react.fragment
  <React.Fragment>
  <App login="harshkumar211"/>
  </React.Fragment>,
  document.getElementById('root')
);

//We will use the jsx to use the xml to write the tags.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
