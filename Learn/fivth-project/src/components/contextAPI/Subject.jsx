import { useContext } from 'react'
import SubjectData from './Contextdata';

function Subject() {
    const subject = useContext(SubjectData);
  return (
    <div style={{backgroundColor:"red", padding:"10px"}}>
        <h2 >Subject is:  {subject}</h2>
    </div>
  )
}

export default Subject;
