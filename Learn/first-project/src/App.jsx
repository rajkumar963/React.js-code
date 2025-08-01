import React from 'react'
// import Text from './components/Text'
// import Function from './components/Function'
import './App.css'
// import State from './components/State'
import Toggle from './components/Toggle'
import Props from './components/Props'
import College from './components/College'
import Student from './components/Student'
import { useState } from 'react'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Loop from './components/Loop'
import ReuseComponent from './components/ReuseComponent'
import Clock from './components/Clock'
import NestedLoop from './components/NestedLoop'

function App() {
  // let username = "Jyoti Thakur and Tushar Pal"
  // let age = 20;
  // let email = "example@example.com"

  let obj={
    name: "Jyoti Thakur ",
    age: 20,
    email: "example@example.com"
  }
  let obj1={
    name: " Tushar Pal",
    age: 21,
    email: "example@example.com"
  }
  let clg=[ "IIT", "IIIT", "NIT", "BIT", "MIT"]

  const [std, setStd] = useState("Pammi")
  return (
    <>
      <h1>Hello World</h1>
      {/* <Text />
      <Function /> */}
      {/* <State /> */}
      <Toggle />
      {/* <Props name={username} age={age} email={email} /> */}
      <Props user={obj} />
      <Props user={obj1} />
      <College clg={clg} />
      <hr />
      {std && <Student std={std} />}
      <button onClick={() => setStd("jyoti Pal")}>Change Student</button>
      <hr />
      <Input />
       <hr />
      <Checkbox />
       <hr />
      <Radio />
      <hr />
      <Loop />
      <hr />
      <ReuseComponent />
      <hr />
      <Clock />
      <hr />
      <NestedLoop />
    </>
  )
}

export default App
