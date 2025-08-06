import React from 'react'

function UseId() {
    // const name = React.useId();
    // const password = React.useId();
    // const email = React.useId();
    // const phone = React.useId();

    const user=React.useId();

  return (
    <div>
        <h2>UseId Hook Example</h2>
        <p>The useId hook is used to generate unique IDs for accessibility purposes.</p>
        <form>
            <p>Generated IDs:</p>
            <p>Name ID: {user+"name"}</p>
            <p>Email ID: {user+"email"}</p>
            <p>Password ID: {user+"password"}</p>
            <p>Phone ID: {user+"phone"}</p>    
            <label htmlFor={user+"name"}>Name:</label>
            <input type="text" id={user+"name"} />
            <label htmlFor={user+"email"}>Email:</label>
            <input type="email" id={user+"email"} />
            <label htmlFor={user+"password"}>Password:</label>
            <input type="password" id={user+"password"} />
            <label htmlFor={user+"phone"}>Phone:</label>
            <input type="tel" id={user+"phone"} />
        </form>
    </div>
  )
}

export default UseId