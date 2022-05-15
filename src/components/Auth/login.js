import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import "../CSS/loginPageCss.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const { data } = await axios.post("https://ecomm-app-backend-demo.herokuapp.com/Authuser/login", { email, password })
        localStorage.setItem("token", data.token);
        navigate("/");
    }
    return (
        <>
            <div className="MainDiv">
                <header className="MainTitle">
                    <div className="logodetails">
                        <img className="logo" src="https://res.cloudinary.com/gopal123/image/upload/v1652623254/logo_uuuan5.png" alt="logo" />
                            <h2 className="logoTitle">oneShop</h2>
                    </div>
                    <div className="TitleWords">Feel the shopping</div>
                </header>
                <div className="WelcomeText">Welcome Back!!</div>
                <div className="formElements">
                    <form onSubmit={handleSubmit}>
                        <label>Email : </label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password : </label>
                        <input type="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>Login</button>
                    </form>
                </div>
                <div>
                    Forgot My Passowrd
                </div>
                <div>
                    Terms of use | Privacy policy
                </div>
            </div>
        </>
    )
}

export default Login;