import React from 'react'
import useCustom from './useCustom'

function UseCustomHook() {
 const [value, toggleValue] = useCustom(false);
 const [data, setData] = useCustom(false);

  return (
    <div>
        <h2 className='text-2xl font-bold'>Custom Hook in React</h2>
        <button  onClick={toggleValue} >Toggle Heading</button>
        <button onClick={() => toggleValue(false)}>Hide Heading</button>
        <button onClick={() => toggleValue(true)}>Show Heading</button>
        {
          value?<h2>Custom Hook</h2>:null
        }
        <hr />
        <button  onClick={setData} >Toggle Heading</button>
        <button onClick={() => setData(false)}>Hide Heading</button>
        <button onClick={() => setData(true)}>Show Heading</button>

       { data?<h2>second Heading</h2>:null}
    </div>
  )
}

export default UseCustomHook;