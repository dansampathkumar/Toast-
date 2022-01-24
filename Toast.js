import React, { useCallback, useEffect } from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import styles from './toast.css';
import {  Progress } from 'reactstrap';



const Toastmessage =(props) =>{
    
    
    const[message,setMessage]=useState([]);
    

    const showtoast=() =>{
        let toastmessage="success the event";
          setMessage([toastmessage])
        
        }
            const deletetoast=useCallback(id =>{
                const deletetoastitem=message.filter((e) =>e.id !==id);
                setMessage(deletetoastitem)
            })
    
    useEffect(() =>{
        const interval=setInterval(() =>{
            if(message){
                deletetoast(message.id);
            }
            
        },`${props.closetime}`)
        return (() =>{
            clearInterval(interval)
        })
    },[showtoast,deletetoast])
    return(
        <div className=" text-center">
            <h1>toast message</h1>
        <div>
          <button onClick={showtoast}>success</button>
          
          </div>
                {
                message.map((toast,index) =>(
                    <div key={index} >
                        
                        <div className="box" style={{backgroundColor:`${props.color}`}}>
                            <button onClick={() =>deletetoast(toast.id)}>X</button>
                            {toast}
                        <div className="progress">

                        </div>
                            
                        </div>                        
                    </div>
                ))
                }
        </div>
    )
}


export default Toastmessage;
