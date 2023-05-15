import React from 'react'
import './style.css';

export default function Settings() {
   const user={
        userName:'Kavish',
        email:'kavishgupta2011@gmail.com',
   };
  return (
    <div className='Settings'>
      <h1>Settings</h1>
        <h2>Name: {user.userName}</h2>
        <h2>Email: {user.email}</h2>
        <button >Change username</button>
        <button>Change password</button>

    </div>
  )
}
