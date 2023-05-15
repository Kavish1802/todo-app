import './App.css';
import Header from './Components/Header'
import Menu from './Components/Menu'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import UpcomingTasks from './Components/UpcomingTasks';
import CompletedTasks from './Components/CompletedTasks';
import Settings from './Components/Settings';
import { useState } from 'react';
import Login from './Components/Login';

function App() {

  return (
    <div className="App">
    <Routes>
    <Route path="/AddTask" element={ <AddTask/> } />
    <Route path="/Tasks" element={ <Tasks/> } />
    <Route path="/UpcommingTasks" element={ <UpcomingTasks/> } />
    <Route path="/CompletedTasks" element={ <CompletedTasks/> } />
    <Route path="/Settings" element={ <Settings/> } />
    <Route path="/" element={ <Login/> } />
    </Routes>
    <Header/>
    <Menu/>
    </div>
  );
}

export default App;
