import { Link } from "react-router-dom";

export default function Register(){
    return(
        <>
        <div className="container">
            <h1>Register</h1>
            <form action="" >
                <div className="lb-inp">
                <label htmlFor="">username</label>
                <input type="text"/>
                </div>
                <div className="lb-inp">
                <label htmlFor="">password</label>
                <input type="text"/>
                </div>
                <Link to="/tasks" type="submit" className="btn-submit">Submit</Link>
            </form>
        </div>
        </>
    )
}