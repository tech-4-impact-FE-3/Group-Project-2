import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action/listUserAction";
import { Link, useNavigate  } from "react-router-dom";
import Gambar from "../components/Gambar";
// import LoginButton2 from "../components/LoginButton2";
import ReturnButton from "../components/ReturnButton";
import axios from "axios";

const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const state = useSelector(state => state.listUser)
    const dispatch = useDispatch()
    const navigation = useNavigate();
    console.log(state)

    useEffect(() => {
        dispatch(getUser())
    }, [])
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ username, password });
      axios.get("https://6379ea2d7419b414df95e16c.mockapi.io/user", {
        username: username,
        password: password,
      })
        .then((result) => {
          if(username == "" && password == ""){
            alert("Masukkan Username dan Password anda");
          }
          result.data.forEach((element) => {
            if (element.username === username && element.password === password) {
              console.log("succes");
              navigation(`/dashboard`);
              localStorage.setItem("account", username);
              localStorage.setItem("pass", password);
            }
          });
        })
        .catch((error) => {
          alert(error, "Error");
        });
    };  

    return (
        <>
        <div className="login-register-content d-flex align-items-center bg-image">
            <div className="page-img d-flex flex-column align-items-center">
                <h1><strong>Login</strong></h1>
                <Gambar />
                <div className="return-btn align-self-start">
                    <ReturnButton />
                </div>
            </div>
            <div className="content-text d-flex flex-column align-items-center">
                <h1>Login</h1>
                <div className="form-login">
                    <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <p>Don't have an account? <Link to={"/register"}>Create account</Link></p>
                        <div className="align-self-center">
                        {/* <LoginButton2 /> */}
                        <Link to={"/dashboard"}><button type="submit" className="btn-lighter btn btn-primary" onClick={handleSubmit}>Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;