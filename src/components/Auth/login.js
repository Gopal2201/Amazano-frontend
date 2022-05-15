import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const {data} = await axios.post("https://ecomm-app-backend-demo.herokuapp.com/Authuser/login", {email, password})
        localStorage.setItem("token", data.token);
        navigate("/");
    }
    return (
        <>
        <Header heading="Login" />
        <form onSubmit={handleSubmit}>
            <label>Email : </label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password : </label>
            <input type="Password" name="password" value={password} onChange={(e) =>  setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
        </>
    )
}

export default Login;