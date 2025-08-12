import React from 'react'
import College from './College'
import SubjectContext from './Contextdata';

function ContextAPI() {
  const [subject, setSubject] = React.useState("English");
  return (
    <div style={{backgroundColor:"yellow", padding:"10px"}}>
       <SubjectContext.Provider value={subject}>
        <select value={subject} id="" onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="History">History</option>
        </select>
            <h2 >Context API in React</h2>
            <button onClick={() => setSubject("")}>Clear Subject</button>
            <College />
       </SubjectContext.Provider>

    </div>
  )
}

export default ContextAPI