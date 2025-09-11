
import './App.css'
import React from 'react'
import Credential from './components/Credential'
// import ValidCrediantial from './components/ValidCrediantial'

const ValidCrediantial = React.lazy(() => import('./components/ValidCrediantial'))

function App() {

  return (
    <>
      <Credential />
      <hr />
      {/* <ValidCrediantial /> */}
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <ValidCrediantial />
      </React.Suspense>
     
    </>
  )
}

export default App
