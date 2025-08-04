import React from 'react'


function UseRef() {
    const inputRef = React.useRef(null);
    const inpotHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus(); // Focus on the input element
        inputRef.current.value = ''; // Clear the input value
        inputRef.current.style.backgroundColor = 'lightblue'; // Change background color
    }


  return (
    <div>
        <h2>UseRef</h2>
        <input ref={inputRef} type="text" placeholder='Enter your name' /> &nbsp;
        <button onClick={inpotHandler}>Focus on input</button>
    </div>
  )
}

export default UseRef