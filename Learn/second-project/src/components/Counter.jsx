import React, { useEffect } from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState(0); 
    const handleCounter = () => {
        console.log("Counter clicked");
    }
    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
        handleCounter();
    }, [count]);

    const handleData = () => {
        console.log("Data clicked");
    }
    useEffect(() => {
        console.log(`Data has changed to: ${data}`);
        handleData();
    }, [count, data]);


  return (
    <div>
      <h2>Counter Component</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Counter</button>
        <p>Data: {data}</p>
        <button onClick={() => setData(data + 1)}>Data</button>        
    </div>
  )
}

export default Counter