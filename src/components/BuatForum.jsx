import React from "react";
import buat from "../img/buat.png";
import { Link } from "react-router-dom";

const BuatForum = () => {
    return (
        <>
            <div className="buat-forum card bg-transparent text-center border-0">
                <img src={buat} alt="image-buat" className="card-img-top img-buat" />
                <div className="card-body">
                <Link to={"/upload"}><button type="button" className="buat-btn btn btn-primary">Buat Forum Baru</button></Link>
                </div>
            </div>
        </>
    )
}

export default BuatForum;