
import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'
import TicketNum from './TicketNum.jsx'

function App() {
  return ( 
    <>
        {/* <LudoBoard/> */}
        {/* <TodoList/> */}
        {/* <Lottery/> */}
        <TicketNum num={5} />
        <TicketNum num={4} />
        <TicketNum num={1} />
    </>
  )

}

export default App
