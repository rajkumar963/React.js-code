import  { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router'
import '../App.css'

function UserUpdate() {
  const {id}=useParams();
  console.log(id);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const url = 'http://localhost:3000/posts/'+id;
    const navigate =useNavigate();

    

  const getUserData = async () => {
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    setName(res.name);
    setAge(res.age);
    setEmail(res.email);
    setGender(res.gender);
  }

  useEffect(() => {
    getUserData();
  }, [])

  const updateUser = async (e) => {
    e.preventDefault();
    let res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        age: Number(age),
        email,
        gender,
      }),
    });
    res = await res.json();
    console.log(res);
    if (res) {
      alert('User updated successfully');
    }
    navigate('/');
  }

  return (
    <div className='useradd'>
        <h2>Edit User Details</h2>
        <form action="" onSubmit={updateUser}>
        <input  value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter name" />
        <input  value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter age" />
        <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <input  value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="Enter gender" /> <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  )
}

export default UserUpdate;