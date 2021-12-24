
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Toastmessage from "./components/Toast";
import { useState } from 'react';
import './components/toast.css';


 function App() {

  const[lists,setLists]=useState([]);
  let toastproperties=null;


  const showtoast=() =>{
    toastproperties={
        id:"1",
        title:"success",
        body:"thank you",
        backgroundcolor:'//#5cb85c'
    }
    setLists([toastproperties])
    console.log(lists);
  
  }


  return (
    <div className=" text-center">
      <h1>toast message</h1>
      <div>
        <button onClick={() =>showtoast()}>success</button>
        <button>message</button>
        <button>primary</button>
        </div>
      <Toastmessage toastlist={lists}/>
      </div>
    
  );
}


export default App;