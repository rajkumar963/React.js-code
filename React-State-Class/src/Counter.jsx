import { useState } from "react";

function init(){
    console.log("init was called");
    return Math.random()*10;
}

export default function Counter(){
    //let [stateVariable,setStateVariable]=useState(10);
    let [count,setCount]=useState(init);    //initialization
     console.log("component rendered");
   
   
    let increaseCount=()=>{
        setCount((ccurrentCount)=>{
       return ccurrentCount+1;
       });
   
}

    return(
        <div>
            <h2>Count={count}</h2>
            <button onClick={increaseCount} >Increase Count</button>
        </div>
    )
}