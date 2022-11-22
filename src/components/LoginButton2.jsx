import React from "react";
import { Link } from "react-router-dom";

const LoginButton2 = () => {
    return (
        <>
            <Link to={"/dashboard"}><button type="submit" className="btn-lighter btn btn-primary">Login</button></Link>
        </>
    )
}

export default LoginButton2;