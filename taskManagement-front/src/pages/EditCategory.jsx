import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function EditCategory(){
    return(
        <>
        <Navbar></Navbar>
        <Header title="Edit Category Page" description="edit your category"></Header>
        <div className="container">
            <form action="" >
                <div className="lb-inp">
                <label htmlFor="">name</label>
                <input type="text"/>
                </div>
                <div className="lb-inp">
                <label htmlFor="">description</label>
                <input type="text"/>
                </div>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
        </>
    )
}