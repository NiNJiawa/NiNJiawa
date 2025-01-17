import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function CreateTask(){
    return(
        <>
        <Navbar></Navbar>
        <Header title="Edit Tasks Page" description="edit your task"></Header>
        <div className="container">
            <form action="" onSubmit={() => handlesubmit()}>
                <div className="lb-inp">
                <label htmlFor="">title</label>
                <input type="text"/>
                </div>
                <div className="lb-inp">
                <label htmlFor="">description</label>
                <input type="text" />
                </div>
                <div className="lb-inp">
                <label htmlFor="">priority</label>
                <input type="text" />
                </div>
                <div className="lb-inp">
                <label htmlFor="">status</label>
                <input type="text"  />
                </div>
                <div className="lb-inp">
                <label htmlFor="">category</label>
                <input type="text" />
                </div>
                <button className="btn-submit" type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}