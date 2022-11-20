import React from "react";
import { Link } from "react-router-dom";

const ReturnButton = () => {
    return (
        <>
            <Link to={"/"}><button type="button" className="btn-darker btn btn-primary">Cancel</button></Link>
        </>
    )
}

export default ReturnButton;