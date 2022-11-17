import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "../pages/Register";

const RegisterButton = () => {
    return (
        <>
            <Link to={"/register"}><button type="button" className="btn-lighter btn btn-primary">Register</button></Link>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default RegisterButton;