import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './style.css';

export default function Menu() {
    let user = 'User Name';
    let menudata = [
        {
            id: 1,
            path: '/',
            data: 'Home',
        },
        {
            id: 2,
            path: '/AddTask',
            data: 'Add Task',
        },
        {
            id: 3,
            path:'/Tasks',
            data: 'Tasks',
        },
        {
            id: 4,
            path:'/UpcommingTasks',
            data: 'Upcomming Tasks',
        },
        {
            id: 5,
            path:'/CompletedTasks',
            data: 'Completed Tasks',
        },
    ]

  // const navLinkStyles = ({isactive})=>{
  //   return {
  //     fontWeight: isactive ? 'bold' : 'normal',
  //     textDecoration: isactive? 'underline':'none',
  //   }

  // }  
  return (
    <div className='Menu'>
      <h1>Menu</h1>
      <h2>
        {user}
      </h2>
      {/* <button >Home</button>
      <button>Add Task</button> */}
      <ul style={{marginTop:"3rem"}}>
        {menudata.map((menu) => (
            <li key={menu.id}>
                <button >
                <NavLink to={menu.path} /*style={navLinkStyles}*/>{menu.data}</NavLink>
                </button>
            </li>
        ))}
      </ul>
      <h3 style={{marginTop:"15rem"}}>
        <button>
         <Link to='/Settings'> Settings </Link>
        </button>
      </h3>
      <h3>
       <button>Logout</button>
      </h3>
      {/* <Link to={/AddTask}>Add Task</Link> */}
    </div>
  )
}
