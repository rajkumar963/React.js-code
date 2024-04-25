import { useState } from 'react'

export default function Form() {
    let [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: ""
    });
    
     let handleInputChange = (event) => {
          setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
             
         })
        }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname: "",
            username: "",
            password: ""
        })
    }

    // let handleNameChange = (event) => {
    //     setFullname(event.target.value);
    // }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="fullname">Name:</label> 
            <input type="text" placeholder="Enter your name" onChange={handleInputChange} value={formData.fullname} id='fullname' name="fullname" />
            <br /> <br />

            <label htmlFor="username">FullName:</label> &nbsp;
            <input type="text" placeholder="Enter your username" onChange={handleInputChange} value={formData.username}  id='username' name="username" />
            <br /><br />

            <label htmlFor="password">Password:</label> &nbsp;
            <input type="password" placeholder="Enter your password" onChange={handleInputChange} value={formData.password}  id='password' name="password" />
            <br /><br />

            <button >Submit</button>
        </form>
    )
}