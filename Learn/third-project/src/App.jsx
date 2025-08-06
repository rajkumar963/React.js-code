import React from 'react'
import './App.css'
import Derived from './components/Derived'
import PureComponent from './components/PureComponent'
import UncontolledCompo from './components/UncontolledCompo'
import UseFormSubmit1 from './components/UseFormSubmit1'
import UseTransition from './components/UseTransition'
import Lifting from './components/Lifting'
import LiftingUser from './components/LiftingUser'

function App() {
  const [user, setUser] = React.useState('');

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
      <Derived />
      <hr />
      <Lifting user={user} setUser={setUser} />
      <hr />
      <LiftingUser user={user} />
    </>
  )
}

export default App
