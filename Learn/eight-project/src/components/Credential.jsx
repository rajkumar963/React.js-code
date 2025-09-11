import React from 'react'

function Credential() {
    const [name, setName] = React.useState('')
    const [nameError, setNameError] = React.useState('')

    const [password, setPassword] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')

    const handleName = (event) => {
        console.log(event.target.value)
        if(event.target.value.length>=10){
            setNameError('Name should be less than 10 characters')
        } else{
            setNameError('')
        }   
    }

    const handlePassword = (event) => {
        let regex=/^[A-Z0-9]+$/i
        console.log(event.target.value)
         if(regex.test(event.target.value)){
             setPasswordError('')

        } else{
          setPasswordError('Password should be characters and numbers only')

        }  
    }


    return (
    <div>
        <h2>Valid Credential using Regex</h2>
        <input className={nameError?'error':''} type="text"  onChange={handleName} placeholder='Enter your name' /> <br />
        <span style={{color:'red'}}>{nameError && nameError}</span><br /> 
        <input className={passwordError?'error':''} type="password" onChange={handlePassword}  placeholder='Enter your password' /> <br /> 
        <span style={{color:'red'}}>{passwordError && passwordError}</span><br />
        <button disabled={nameError||passwordError}>Submit</button>

    </div>
  )
}

export default Credential;