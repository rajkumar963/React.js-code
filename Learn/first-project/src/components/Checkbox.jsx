import React from 'react'

function Checkbox() {
    const [skill, setSkill] = React.useState([]);
    const handleSkill= (e) => {
        console.log(e.target.value, e.target.checked);
        if (e.target.checked) {
            setSkill([...skill, e.target.value]);
        } else {
            setSkill(skill.filter((item) => item !== e.target.value));
        }
    }

  return (
    <div>
        <h2> Handle Checkbox</h2>
        <h3>Select your answer</h3>
            <input onChange={handleSkill} type="checkbox" name="answer" value="c++" id="c++" />
            <label htmlFor="c++">C++</label>
            <input onChange={handleSkill} type="checkbox" name="answer" value="javascript" id="javascript" />
            <label htmlFor="javascript">JavaScript</label>

            <input onChange={handleSkill} type="checkbox" name="answer" value="python" id="python" />
            <label htmlFor="python">Python</label>

            <input onChange={handleSkill} type="checkbox" name="answer" value="ruby" id="ruby" />
            <label htmlFor="ruby">Ruby</label>
        
        <h3>Selected Skills:</h3>
        <ol>
            {skill.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>

    </div>
  )
}

export default Checkbox