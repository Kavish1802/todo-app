import React from 'react'
import './style.css';
export default function body() {
  const UserName='Kavish';
  return(
    <div className='Home'>
      <h1>Home</h1> 
      <h2>Welcome {UserName}</h2>
      <h3>
        What is on your mind today?
      </h3>
    </div>
  )
}
