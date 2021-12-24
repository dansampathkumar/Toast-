import React from 'react';
import reactDom from 'react-dom';
import './toast.css';



const Toastmessage =(props) =>{
    // const width=props.width?`${props.width}px`:'40px';
    // const height=props.height?`${props.height}px`:'20px';
    // const radius=props.radius?`${props.radius}px`:'10px';
    return(
        <div>
            <h1>hello</h1>
                {
                    props.toastlist.map((toast,i) =>(
                    <div key={i} >
                        <div className="style" >
                            <button>X</button>
                            
                            <p>{toast.title}--{toast.body}</p>
                            
                        </div>                        
                    </div>
                ))
                }
        </div>
    )
}


export default Toastmessage;