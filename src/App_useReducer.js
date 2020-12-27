import React,{useEffect,useState,useReducer} from "react";
import "./App.css";

function App(){

  //const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer(
    (checked)=> !checked,
    false
  );

//Reducer function
//Its take the current state and return the new state
  /**function toggle(){
    setChecked((checked)=> !checked);
  }**/
  return (
    <>
    <input type="checkbox" value={checked}
    onChange={toggle}/>
    <p> {checked ?"checked":"not checked"}</p>
    </>
  );
}


export default App;
