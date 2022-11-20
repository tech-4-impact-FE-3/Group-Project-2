import React from "react";
import { Link } from "react-router-dom";

const LoginButton1 = () => {
    return (
        <>
            <Link to={"/login"}><button type="button" className="btn-darker btn btn-primary">Login</button></Link>
        </>
    )
}

export default LoginButton1;