import React, { useEffect} from 'react'

function Clock() {
    const [color, setColor] = React.useState();
    const [time, setTime] = React.useState(0);

    useEffect(() => {
       setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    },[]);

  return (
    <div>
        <h2>Clock Component</h2>
        <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
        </select>
        <h3 style={{color:color}}>Current Time: {time}</h3>
    </div>
  )
}

export default Clock