import React from 'react'

function Updateobject() {
    const [name, setName] = React.useState('Pammi');

    const [data, setData] = React.useState({
        name: 'Pammi',
        age: 25,
       address: {
            city: 'Delhi',
            country: 'India'
       }
    });
    const handleName=(val)=>{
        setData({...data, name: val});
    }
    const handleAge=(val)=>{
        setData({...data, age: val});
    }
    const handleCity=(val)=>{
        setData({...data, address: {...data.address, city: val}});
    }
    
  return (
    <div>
        <h2>Update Object in State</h2>
        <input onChange={(e)=>handleName(e.target.value)} type="text" placeholder='Update name' /> <br />
        <input onChange={(e)=>handleAge(e.target.value)} type="number" placeholder='Update age' /> <br />
        <input onChange={(e)=>handleCity(e.target.value)} type="text" placeholder='Update city' /> <br />
        <h3>Name: {data.name} </h3>
        <h3>Age: {data.age} </h3>
        <h3>City: {data.address.city} </h3>
        <h3>Country: {data.address.country} </h3>
    </div>
  )
}

export default Updateobject;