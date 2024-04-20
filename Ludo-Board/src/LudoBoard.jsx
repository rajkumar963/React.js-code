import { useState } from "react";
export default function LudoBoard() {
let [moves,setmoves]=useState({ blue:0,yellow:0,green:0,red:0});
// let [win,setwin]=useState({ blue:0,yellow:0,green:0,red:0});
let [arr,setArr]=useState(["no moves"]);

 let updateBlue=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,blue: prevmoves.blue+1};
        }); 

        
        // setArr((prevArr)=> {
        //   return  [...prevArr,"blue moves"];
        // });
        // console.log(arr);
    }

    let updateYellow=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,yellow: prevmoves.yellow+1};
        }); 
    }

    let updateGreen=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,green: prevmoves.green+1};
        }); 
    }

    let updateRed=()=>{
        setmoves((prevmoves)=>{
            return {...prevmoves,red: prevmoves.red+1};
        }); 
    }

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
               <p>Blue move ={moves.blue} </p>
               <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
               <p>Yellow move ={moves.yellow} </p>
               <button style={{backgroundColor:"yellow" , color:"black"}} onClick={updateYellow}>+1</button>
               <p>Green move ={moves.green} </p>
               <button style={{backgroundColor:"green"}} onClick={updateGreen} >+1</button>
               <p>Red move ={moves.red} </p>
               <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}