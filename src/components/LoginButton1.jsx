import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../pages/Login";

const LoginButton1 = () => {
    return (
        <>
            <Link to={"/login"}><button type="button" className="btn-darker btn btn-primary">Login</button></Link>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default LoginButton1;