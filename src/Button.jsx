function printHello(event) {
    console.log("Hello World");
    console.log(event);
}

function handleHover(){
    console.log("Bye World");
}

function handleOblClick(){
    console.log("Double click World");
}
    
export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={handleHover}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quisquam officiis, iure consequatur et consectetur sint 
             repudiandae eaque est placeat aperiam fuga optio autem 
             voluptas quasi! Mollitia sunt nobis ex doloru
             m. Click the button to see the console</p>
            <button onDoubleClick={handleOblClick}>double click me!</button>
        </div>
    );
}