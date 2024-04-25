import { useState } from 'react';
import './Comments.css'
import CommentsForm from './CommentsForm';

export default function Comments() {
    let [Comments, setComments] = useState([{
        username: "RK",
        comments: "Great job!",
        rating: 4
    }]);

    let addNewComment = (Comments) => {
        setComments((currComments) => [...currComments, Comments]) 
    
}

    return (
        <>
        <div>
            <h3>All Comments!!</h3> 
            {Comments.map((Comments, idx) => (
               <div className="comments" key={idx}>
               <span>{Comments.comments}</span> &nbsp;
               <span>(Rating= {Comments.rating})</span> &nbsp;
               <p>- {Comments.username}</p>
           </div>
                
            ))}
            
        </div> 
        <br />
        <hr />
        <CommentsForm addNewComment={addNewComment}/>
          
        </>
    )
    
}