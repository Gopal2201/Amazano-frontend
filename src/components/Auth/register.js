import { useState } from "react";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobNo, setMobNo] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("https://ecomm-app-backend-demo.herokuapp.com/user/create", {email, password, mobNo, name})
        console.log(data);
    }

    return(
        <>
            <Header heading="Register Page"/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Mobile No : </label>
                    <input type="number" name="mobNum" value={mobNo} onChange={(e) => setMobNo(e.target.value)} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </>
    )
}

export default Register;