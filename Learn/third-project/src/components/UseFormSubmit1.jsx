import React from 'react'
import {useFormStatus} from 'react-dom'

function UseFormSubmit1() {
    const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 5000));
    console.log("Form submitted");
};


    function CustomForm() {
        const {pending} = useFormStatus()
        console.log(pending)

        return (
            <div>
                <input type="text" placeholder="Enter something..." />
                <br /> <br />
                <input type="password" placeholder="Enter password..." /> <br /> <br />
                <button disabled={pending}>Submit</button>
            </div>
        )
    }
  return (
    <div>
        <h2>Use Form Submit</h2>
        <form onSubmit={handleSubmit}>
            <CustomForm />
        </form>
    </div>
  )
}

export default UseFormSubmit1;