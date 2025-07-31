import React from 'react'

function College({ clg }) {
  return (
    <div>
      <h2>Colleges</h2>
      <ul>
        {clg.map((college, index) => (
          <li key={index}>{college}</li>
        ))}
      </ul>
    </div>
  )
}

export default College