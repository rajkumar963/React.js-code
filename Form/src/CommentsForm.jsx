import { useState } from 'react'
import './CommentsForm.css';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required !';
    }
  
  
  
    return errors;
  };


export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     comments: "",
    //     rating: 5
    // })

    const formik = useFormik({
        initialValues: {
          username: '',
          comments: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })
    // }
//    let handleSubmit = (event) => {
//                                             //     if(!formData.username || !formData.comments) {
//                                             //      setIsValid(false);
//                                             //     event.preventDefault();
//                                             //     //alert("Please enter username and comments");
           
//                                        //     return; 
//                                             // }
//         addNewComment(formData); 
//         event.preventDefault();
//         console.log(formData);

//         setFormData({
//             username: "",
//             comments: "",
//             rating: 5
//         })
//     }


    return (
        <div className='form'>
            <h3>Give a Comments!!</h3> <hr />
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">UserName: </label>
                <input type="text" placeholder="Enter your username"  value={formik.values.username}  onChange={formik.handleChange} id='username' name='username' /><br />
                {formik.errors.username ? <p style={{ color: 'red' }}>{formik.errors.username}</p> : null}

                
                <br /><br />
                <label htmlFor="comments">Comments: </label>
                <textarea name="comments" id=" comments" cols="20" rows="2" value={formik.values.comments} placeholder='comments'  onChange={formik.handleChange}  >Comments</textarea>
                <br /><br />
                <label htmlFor="rating">Rating: </label>
                <input type="number" placeholder="rating" min={1} max={5} value={formik.values.rating}  onChange={formik.handleChange} id='rating' name='rating' />
                <br /><br />
                <button type='submit' >Add Comments</button>
                
            </form>
        </div>
    )


}