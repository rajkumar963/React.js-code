 import { useState, useEffect } from "react";
 export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let increaseCountx = () => {
        setCountx(currCount => currCount + 1);
    }

    let increaseCounty = () => {
        setCounty(currCount => currCount + 1);
    }
     
    useEffect(function printSomeThing() {
        console.log("This is a side effect");
    }, [ ])

    return(
        <div>
            <h2>Countx={countx}</h2>
            <button onClick={increaseCountx}>+1</button>
            <h2>County={county}</h2>
            <button onClick={increaseCounty}>+1</button>
        </div>
    )

}