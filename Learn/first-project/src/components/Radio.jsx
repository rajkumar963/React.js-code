import React from 'react'

function Radio() {
  const [gender, setGender] = React.useState('female');
  const [city, setCity] = React.useState('Mumbai');
  return (
    <div>
        <h2>Handle Radio Buttons</h2>
        <h3>Select Gender</h3>
        <input type="radio" onChange={(e)=>setGender(e.target.value)} checked={gender == 'male'} name="radio" value="male" id="male" /> 
        <label htmlFor="male">Male</label>
        <input type="radio" onChange={(e)=>setGender(e.target.value)} checked={gender == 'female'} name="radio" value="female" id="female" /> 
        <label htmlFor="female">Female</label>
        <h3>Selected Gender: {gender}</h3>
     <br /><br />

     <h3>Select City</h3>
       <select name="city" id="" defaultValue={"Mumbai"} onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">Select City</option>
         <option value="new-york">New York</option>
         <option value="los-angeles">Los Angeles</option>
         <option value="chicago">Chicago</option>
        <option value="houston">Mumbai</option>
        <option value="bangalore">Bangalore</option>
        <option value="phoenix">Phoenix</option>
       </select>
       <h3>Selected City: {city}</h3>

    </div>
  )
}

export default Radio