import React from 'react'
import '../Components/style.css';
import { useState } from 'react';


function TaskModals(props) {
  return (
    <div className='modalBG'>
      <div className='modalContainer'>
      <button onClick={()=>
      props.func(false)} >X</button>
       <div className='modalInfo'>
            <h1>Task Name:{props.task.taskName}</h1>
            <h2>Task Details:{props.task.taskDetails}</h2>
            <h2>Completion Date:{props.task.completionDate}</h2> 
            <h2>Type:{props.task.type}</h2>  
            <h2>Reminder:{props.task.reminder}</h2>
            <h2>Priority:{props.task.priority}</h2>
            <h2>Created Date:{props.task.createdDate}</h2>
       </div>
       <button >Completed</button>
      </div>
    </div>
  )
}

export default TaskModals
