import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Task(){
    const [tasks, setTasks] = useState([]);
    
      async function fetchTasks() {
        const response = await fetch("http://127.0.0.1:8000/api/tasks");
        const resJson = await response.json();
        setTasks(resJson.tasks);
      }
    
      async function handleDelete(id){
        const response = await fetch(`http://127.0.0.1:8000/api/task/${id}`, {
            method: "DELETE"
        })
        fetchTasks()
      }
    
      useEffect(() => {
        fetchTasks();
      }, []);
    
      return (
      <>
      <Navbar></Navbar>
      <Header title="Task List Pages" description="All taks information"></Header>
      <div className="container">
        <div className="create">

        <Link to="/createTask" className="btn-create">Create</Link>
        </div>
        {tasks.map((task) => {
            return(

        <div className="card" key={task.id}>
            <div className="card-header">
                <h1>{task.title}</h1>
            </div>
            <hr />
            <div className="card-body">
                <p>Description: {task.description}</p>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.status}</p>
                <p>Category: {task.category_id}</p>
            </div>
            <div className="card-footer">
                <Link to={`/edit/${task.id}`} className="btn-edit">Edit</Link>
                <button onClick={() => handleDelete(task.id)} className="btn-delete">Delete</button>
            </div>
        </div>
            )
        })}
      </div>
      </>
    )
}