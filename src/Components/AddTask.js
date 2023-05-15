// import React from 'react'
// import { Form } from 'react-router-dom'
// import { useState } from 'react'

// export default function AddTask() {
//     //create a state for the form
//     const [text, setText] = useState('')
//     const [type, setType] = useState('')
//     const [date, setDate] = useState('')
//     const [reminder, setReminder] = useState(false)
//     const [priority, setPriority] = useState('')
  
//   return (
//     <Form>
//         <div className='form-control'>
//             <label >Task</label>
//             <input type='text' placeholder='Add Task' value={text} onChange={(e)=>{
//                 setText(e.target.value);
//             }}/>
//         </div>
//     </Form>
//   )
// }

import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import './style.css';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [type, setType] = useState('');
  const [reminder, setReminder] = useState(false);
  const [priority, setPriority] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data={
        taskName,
        taskDetails,
        completionDate,
        type,
        reminder,
        priority,
    }
    console.log(data);
    // Handle form submission here
    // save the task to the database
    //pass them as props to the parent component
    //clear the form

  };

  return (
    <div className='AddTask'>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
        </label>
        <br />
        <label>
          Task Details:
          <textarea value={taskDetails} onChange={(event) => setTaskDetails(event.target.value)} />
        </label>
        <br />
        <label>
          Completion Date:
          <input type="date" value={completionDate} onChange={(event) => setCompletionDate(event.target.value)} />
        </label>
        <br />
        <label>
          Type:
          <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
        </label>
        <br />
        <label>
          Reminder:
          <input type="checkbox" checked={reminder} onChange={(event) => setReminder(event.target.checked)} />
        </label>
        <br />
        <label>
          Priority:
          <select value={priority} onChange={(event) => setPriority(event.target.value)}>
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;