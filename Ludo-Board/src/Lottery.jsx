import { useState } from "react";
//import "./Lottery.css"
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";


export default function Lottery({n=3,winCondition}){
    let [ticket, setTicket] =useState(genTicket(n));
    let isWinning=winCondition(ticket);
   
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }

    return(
       <div>
            <h1>Lottery Game! </h1>
            <div className="ticket">
              <Ticket ticket={ticket} />
            </div> 
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratulations, you won!!"}</h3>

       </div>
    )

}