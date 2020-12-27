import React,{useEffect,useState} from "react";
import "./App.css";

function App(){

  const [emotion, setEmotion]=useState("happy");

  const [secondary, setSecondary] = useState("tired");
   //two items: first item: stateVariable
   //SecondItem: function to update state variable

   //useEffect takes the callback function and array of the dependency arguments as second parameter

   useEffect(()=>{
     console.log(`Hello Buddy, I am feeling ${emotion}`);
   },[emotion]);
   useEffect(()=>{
     console.log(`Hello Buddy, I am feeling ${secondary}`);
   },[secondary]);
  return (
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={()=>setEmotion("Happy")}>Make Happy
    </button>
    <button onClick={()=>setSecondary("Crabby")}>Make Crabby
    </button>
    <button onClick={()=>setEmotion("Enthusiastic")}>Enthusiastic
    </button>
    </>
  );
}


export default App;
