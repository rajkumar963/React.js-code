import React from 'react'

function Input() {
    const [val, setVal] = React.useState("");
  return (
    <div>
        <h2>Input Component</h2>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder="Enter text" />
        <h3>{val}</h3>
        <button onClick={() => setVal("")}>Clear</button>
    </div>
  )
}

export default Input