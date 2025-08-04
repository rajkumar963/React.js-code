import React from 'react'
import { useRef } from 'react';

function UncontolledCompo() {

    const userRef=useRef(null);
    const passwordRef=useRef(null);

    const handleForm=(e) => {
        e.preventDefault();
        // const user=document.querySelector('#user').value;
        // const password=document.querySelector('input[type="password"]').value;

        const user=userRef.current.value;
        const password=passwordRef.current.value;

        console.log(`User: ${user}, Password: ${password}`);
        // Reset the form
        userRef.current.value = '';
        passwordRef.current.value = '';
    }

    const handleFormRef=(e) => {
        e.preventDefault();
        const user=document.getElementById('userref').value;
        const password=document.getElementById('passwordref').value;
        console.log(`User: ${user}, Password: ${password}`);
        // Reset the form
        document.getElementById('userref').value = '';
        document.getElementById('passwordref').value = '';
    }
  return (
    <div>
        <h2>Uncontrolled Component</h2>
        <form onSubmit={handleForm}>
            <input ref={userRef} type="text"  id='user' placeholder="Enter your name" /> <br />
            <input ref={passwordRef} type="password" id='password' placeholder="Enter your password" /> <br />
            <button type="submit">Submit</button>
        </form> <br /> <br />
        <form onSubmit={handleFormRef}>
            <input type="text" id='userref' placeholder="Enter your name" /> <br />
            <input type="password" id='passwordref' placeholder="Enter your password" /> <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UncontolledCompo