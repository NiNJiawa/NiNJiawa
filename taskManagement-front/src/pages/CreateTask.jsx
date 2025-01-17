import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function CreateTask(){
    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "",
        status: "",
        category_id: ""
    })

    const navigate = useNavigate();

    async function handlesubmit(){
        const response = await fetch('http://127.0.0.1:8000/api/task/create', {
            method: "POST",
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    }

    return(
        <>
        <Navbar></Navbar>
        <Header title="Create Tasks Page" description="add your new task"></Header>
        <div className="container">
            <form action="" onSubmit={() => handlesubmit()}>
                <div className="lb-inp">
                <label htmlFor="">title</label>
                <input type="text" onChange={() => setTask(...task,title, e.target.value)}/>
                </div>
                <div className="lb-inp">
                <label htmlFor="">description</label>
                <input type="text" onChange={() => setTask(...task,description, e.target.value)}/>
                </div>
                <div className="lb-inp">
                <label htmlFor="">priority</label>
                <input type="text" onChange={() => setTask(...task,priority, e.target.value)} />
                </div>
                <div className="lb-inp">
                <label htmlFor="">status</label>
                <input type="text" onChange={() => setTask(...task,status, e.target.value)} />
                </div>
                <div className="lb-inp">
                <label htmlFor="">category</label>
                <input type="text" onChange={() => setTask(...task,category_id, e.target.value)}/>
                </div>
                <button className="btn-submit" type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}