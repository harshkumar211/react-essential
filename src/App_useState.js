import React,{useState} from "react";
import "./App.css";

function App(){

  const [emotion, setEmotion]=useState("happy");
   //two items: first item: stateVariable
   //SecondItem: function to update state variable

  return (
    <>
    <h1>Current emotion is {emotion}.</h1>

    <button onClick={()=>setEmotion("Frustrated")}>Frustrated
    </button>
    <button onClick={()=>setEmotion("Enthusiastic")}>Enthusiastic
    </button>
    </>
  );
}


export default App;
