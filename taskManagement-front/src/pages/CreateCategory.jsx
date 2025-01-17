import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function CreateCategory(){
    const [category, setCategory] = useState({
        name: "",
        description: "",
    })

    const navigate = useNavigate();

    async function handlesubmit(){
        const response = await fetch('http://127.0.0.1:8000/api/category/create', {
            method: "POST",
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
    }

    return(
        <>
        <Navbar></Navbar>
        <Header title="Create Category Page" description="add your new category"></Header>
        <div className="container">
            <form action="" onSubmit={() => handlesubmit()}>
                <div className="lb-inp">
                <label htmlFor="">name</label>
                <input type="text" onChange={() => setTask(...category,title, e.target.value)}/>
                </div>
                <div className="lb-inp">
                <label htmlFor="">description</label>
                <input type="text" onChange={() => setTask(...category,description, e.target.value)}/>
                </div>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
        </>
    )
}