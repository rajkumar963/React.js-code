export default function Counter(){
    let count=0;

    function incCount(){
        count+=1;
        console.log(count);
    }
    return(
        <div>
            <h2>Count={count}</h2>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}