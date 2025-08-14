import { useParams, useLocation } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const { state } = useLocation(); // state contains user object

  return (
    <div style={{ backgroundColor: "lightblue", padding: "10px", margin: "10px", borderRadius: "10px" }}>
      <h1>User Detail</h1>
      <h3>Id: {id}</h3>
      <h3>Name: {state?.name}</h3>
      <h3>Age: {state?.age}</h3>
      <h3>Email: {state?.email}</h3>

       <button onClick={() => window.history.back()} style={{ backgroundColor: "Blue", padding: "8px", margin: "10px", borderRadius: "10px", color: "white" }}>Back</button>
    </div>
  );
}

export default UserDetails;
