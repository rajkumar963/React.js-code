function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Enter your name"/>
            <button > Submit</button>
        </form>
    )
}