import React from 'react'
import { useState } from 'react';

function Toggle() {
    const [display, setDisplay] = useState(true); 
    const [count, setCount] = useState(0);   
  return (
    <div>
        <h1>Toggle in React</h1>
        {display? <h2>Toggle is ON</h2> : <h2>Toggle is OFF</h2>}
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Counter</button>
        {
            count==0? <h2>Counter is 0</h2> 
            :count==1? <h2>Counter is 1</h2>
            :count==2? <h2>Counter is 2</h2>
            :count==3? <h2>Counter is 3</h2>
            :count==4? <h2>Counter is 4</h2>
            : <h2>Counter is greater than 4</h2>
        }
    </div>
  )
}

export default Toggle