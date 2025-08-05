import React from 'react'
let guest=0;
function PureComponent() {
    
  return (
    <div>
        <h2>Pure Component and Impure Component</h2>
        <p>A pure component is a component that does not re-render if the props and state have not changed.</p>
        <p>An impure component, on the other hand, re-renders every time its parent component re-renders, regardless of whether its props or state have changed.</p>
        
        <Cup />
        <Cup />
    </div>
  )
}

const Cup=()=>{
    guest+=1;
    return (<p>Guest: {guest}</p>)
}


export default PureComponent