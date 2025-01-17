import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Task from './pages/Task'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateTask from './pages/CreateTask'
import EditTask from './pages/EditTask'
import Category from './pages/Category'
import CreateCategory from './pages/CreateCategory'
import EditCategory from './pages/EditCategory'
import ShowTasks from './pages/ShowTasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/createTask" element={<CreateTask/>}/>
        <Route path="/editTask" element={<EditTask/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/createCategory" element={<CreateCategory/>}/>
        <Route path="/editCategory" element={<EditCategory/>}/>
        <Route path="/showTasks" element={<ShowTasks/>}/>
      </Routes>
    </>
  )
}

export default App
