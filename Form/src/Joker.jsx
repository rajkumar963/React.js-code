 import { useState, useEffect } from "react";

 export default function Joker() {
    let [Joke, setJoke] = useState({});

    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
        let response = await fetch(URL)
       let json = await response.json();
       setJoke({setup:json.setup, punchline:json.punchline});
    };

    useEffect(()=>{ async function getFirstJoke() {
        let response = await fetch(URL)
        let json = await response.json();
        console.log(json);
        setJoke({setup:json.setup, punchline:json.punchline});
    }
    getFirstJoke();
    }, []);
       

   return (        
       <div>
        <h3>Joker!</h3>
        <h2>{Joke.setup}</h2>
        <h2>{Joke.punchline}</h2>
        <button onClick={getNewJoke}>Get New Joke</button>
       </div>
    )
}