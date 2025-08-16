import '../App.css'
import React from 'react';

function UserAdd() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const createUser = async (e) => {
    e.preventDefault(); // prevent page refresh
    setLoading(true);
    setError(null);

    try {
      const url = 'http://localhost:3000/posts';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          age: Number(age), // ensure it's a number
          email,
          gender,
          company,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      console.log('User created:', data);

      // reset form
      setName('');
      setAge('');
      setEmail('');
      setGender('');
      setCompany('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="useradd">
      <h2>Add New Users</h2>
      <form onSubmit={createUser}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" required />
        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter age" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
        <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="Enter gender" required /> <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UserAdd;
