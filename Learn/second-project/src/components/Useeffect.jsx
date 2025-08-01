import React, { useEffect } from 'react'

function Useeffect() {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState(0);
    
    function callOnce(){
        console.log("This function is called only once when the component mounts.");
    }

    function counterfunction(){
        console.log("Count has changed to: ", count);
    }

    useEffect(() => {
        counterfunction();
    }, [count]); // Empty dependency array means this effect runs once after the initial render

    useEffect(() => {
        callOnce();
    }, []);

  return (
    <div>
        <h2>UseEffect Hook</h2>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Count</button>
        <p>Data: {data}</p>
        <button onClick={() => setData(count + 1)}>Set Data</button>
    </div>
  )
}

export default Useeffect;