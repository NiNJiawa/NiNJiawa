import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Task() {
  const [categories, setCategories] = useState([]);

  async function fetchTasks() {
    const response = await fetch("http://127.0.0.1:8000/api/categories");
    const resJson = await response.json();
    setCategories(resJson.categories);
  }

  async function handleDelete(name) {
    const response = await fetch(`http://127.0.0.1:8000/api/task/${name}`, {
      method: "DELETE",
    });
    fetchTasks();
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Header
        title="Category List Pages"
        description="All category information"
      ></Header>
      <div className="container">
        <div className="create">
          <Link to="/createTask" className="btn-create">
            Create
          </Link>
        </div>
        {categories.map((category) => {
          return (
            <div className="card" key={category.id}>
              <div className="card-header">
                <Link to="/showTasks">{category.name}</Link>
              </div>
              <div className="card-body">
                <p>{category.description}</p>
              </div>
              <div className="card-footer">
                <Link to="/editCategory" className="btn-edit">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(category.name)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
