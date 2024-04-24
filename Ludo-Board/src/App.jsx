
import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'
import TicketNum from './TicketNum.jsx'
import Ticket from './Ticket.jsx'
import {sum} from './Helper'

let winCondition=(ticket)=>{
//  return sum(ticket)===15;
  return ticket.every((num)=> num===ticket[0]);
};

function App() {
  return ( 
    <>
        {/* <LudoBoard/> */} 
        {/* <TodoList/> */}
        <Lottery n={3}  winCondition={winCondition} />
        {/* <TicketNum/> */}
        {/* <Ticket ticket={[0,1,2]} /> */}
        
  
    </>
  )

}

export default App
