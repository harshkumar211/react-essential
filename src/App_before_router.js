import React,{useEffect,useState} from "react";
import "./App.css";


//https://api.github.com/users
function App({login}){
const [data,setData]=useState(null);

//use the loading states for better presentation
const [loading,setLoading]=useState(false);
const [error,setError]=useState(null);

useEffect(()=>{
  if(!login) return;
  setLoading(true);
  fetch(`https://api.github.com/users/${login}`)
    .then((response)=>response.json())
    .then(setData)
    .then(()=>setLoading(false))
    .catch(setError);
},[login]);

if(loading){
  return <h1> Loading../.../...</h1>
}
if(error){
  return <pre>{JSON.stringify(error,null,2)}</pre>
}
  if(data){
    return (
      <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url}></img>
      </div>);
  }
  return (
    <div>
No User Available
    </div>
  );
}


export default App;
