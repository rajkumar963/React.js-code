const Reuse=({user})=>{
    return (
        <div style={{border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "left"}}>
            <p style={{fontWeight: "bold",color: "red"}}>Name: {user.name}</p>
            <p style={{fontWeight: "bold"}}>Age: {user.age}</p>
            <p style={{fontWeight: "bold",color: "green"}}>Email: {user.email}</p>
        </div>
    )
}

export default Reuse;