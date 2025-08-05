
import './App.css'
import PureComponent from './components/PureComponent'
import UncontolledCompo from './components/UncontolledCompo'
import UseFormSubmit1 from './components/UseFormSubmit1'
import UseTransition from './components/UseTransition'

function App() {

  return (
    <>
      <UncontolledCompo />
      <hr />
      <UseFormSubmit1 />
      <hr />
      <UseTransition />
      <hr />
      <PureComponent />
      <hr />
    </>
  )
}

export default App
