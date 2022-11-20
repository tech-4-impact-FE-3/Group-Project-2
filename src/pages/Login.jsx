import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Gambar from "../components/Gambar";
import LoginButton2 from "../components/LoginButton2";
import ReturnButton from "../components/ReturnButton";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});

    // console.log(username, password);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Username: ${username}, Password: ${password}');
        setData({username, password});
        setUsername("");
        setPassword("");
    };

    console.log(data);

    return (
        <>
        <div className="login-content d-flex justify-content-between align-items-center bg-image">
            <div className="page-img d-flex flex-column align-items-center">
                <h1><strong>Login</strong></h1>
                <Gambar />
                <div className="return-btn align-self-start">
                <ReturnButton />
                </div>
            </div>
            <div className="login-text d-flex flex-column align-items-center">
                <h1>Login</h1>
                <div className="form-login">
                    <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Link to={"/register"}><a>Don't have an account? Create account</a></Link>
                        <div className="align-self-center">
                        <LoginButton2 />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;