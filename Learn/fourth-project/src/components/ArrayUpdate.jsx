import React from 'react'

function ArrayUpdate() {

    const [array, setArray] = React.useState([1, 2, 3]);

  return (
    <div>
        <h2>Array Update</h2>
        <p>This component demonstrates how to update an array in React.</p>
        {
            array.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}
        <button onClick={() => {
            setArray([...array, array.length + 1]);
        }}>Update Array</button>
    </div>
  )
}

export default ArrayUpdate;
