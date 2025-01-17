import { useState } from "react"

export default function Login(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    async function handleLogin(e){
        e.preventDefault()
        const response = await fetch()
    }


    return(
        <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Login</h1>
                </div>
                <div className="card-body">
                    <div className="form" onClick={handleLogin(e)}>
                        <div className="lb-inp">
                        <label htmlFor="">Username</label>
                        <input type="text" />
                        </div>
                    </div>
                    <div className="form">
                        <div className="lb-inp">
                        <label htmlFor="">Password</label>
                        <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}