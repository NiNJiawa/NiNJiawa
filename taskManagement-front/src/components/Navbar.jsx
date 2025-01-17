import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <h1>Task Manegement</h1>
            <ul>
                <li>
                    <Link to="/tasks">Task</Link>
                </li>
                <li>
                    <Link to="/category">Category</Link>
                </li>
            </ul>
        </nav>
    )
}