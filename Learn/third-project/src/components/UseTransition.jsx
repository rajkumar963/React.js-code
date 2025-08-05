
import React from 'react'
function UseTransition() {
     const [pending, startTransition] = React.useTransition();
    const handleButtonClick = async() => {
        startTransition(async() => {
            await new Promise(res=>setTimeout(res, 4000))
        })
    };

  return (
    <div>
        <h2>UseTransition (work in progress)</h2>
        {
            pending ?
            <img style={{width: '100px', height: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif" alt="" />
            :null
        }
         <button disabled={pending}  onClick={handleButtonClick}> Click me</button>
    </div>
  )
}

export default UseTransition




//Method 2: Uncomment the code below if you want to use a different implementation
// This is an alternative implementation of UseTransition that you can use if needed.

// import { useState } from 'react'
// function UseTransition() {
//     const [Pending, setPending] = useState();
//     const handleButtonClick = async() => {
//         setPending(true);
//       await new Promise(res=>setTimeout(res, 2000))
//         setPending(false);
//     };

//   return (
//     <div>
//         <h2>UseTransition (work in progress)</h2>
//          <button disabled={Pending} onClick={handleButtonClick}> Click me</button>
//     </div>
//   )
// }

// export default UseTransition