import React from 'react'
import './style.css';
import TaskModals from '../Modals/TaskModals';
import { useState } from 'react';

const Tasks = () => {
  const [currentTask, setCurrentTask] = useState(); 
  const [isOpen, setIsOpen] = useState(false);
  const taskList = [
    {
      id: 1,
      iscompleted: false,
      taskName:'Learn React',
      taskDetails:'Learn React from scratch',
      completionDate:'30/04/23',
      type:'Personal',
      reminder:true,
      priority:'High',
      createdDate:'10/04/21',
      createdby:'Kavish',
    },
    {
      id: 2,
      taskName: 'Workout',
      iscompleted: false,
      taskDetails:'Do workout for 1 hour',
      completionDate:'30/04/23',
      type:'Personal',
      reminder:true,
      priority:'High',
      createdDate:'10/04/21',
      createdby:'Kavish',
    },
    {
      id: 3,
      taskName: 'Learn AWS',
      isompleted: false,
      taskDetails:'Learn AWS to get certified',
      completionDate:'30/04/23',
      type:'Personal',
      reminder:true,
      priority:'High',
      createdDate:'10/04/21',
      createdby:'Kavish',
    }
  ]

  // const handleClick = (task) => {
  //   setOpen(!isOpen);
  //   console.log(task);
    
  // }

  return (
  
    <div className='Tasks'>
       
      <h1>
       Tasks 
      </h1>
      <ol className='task_list'>
        {taskList.map((t) => (
          <li key={t.id}>
            <button onClick={()=>{
              console.log(t);
              setCurrentTask(t);
              setIsOpen(!isOpen);
            }}>{t.taskName}</button> 
            Stautus:{t.iscompleted ? "True" : "False"}
          </li>
        ))}
       </ol>
       {isOpen&&<TaskModals task={currentTask}  func={setIsOpen}/>}
    </div>
  )
}

export default Tasks
