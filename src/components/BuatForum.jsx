import React from "react";
import buat from "../img/buat.png";
import UploadForum from "../pages/UploadForum";

const BuatForum = () => {
    return (
        <>
            <div className="buat-forum card bg-transparent text-center border-0">
                <img src={buat} alt="image-buat" className="card-img-top img-buat" />
                <div className="card-body">
                    <button type="button" className="buat-btn btn btn-primary">Buat Forum Baru</button>
                </div>
            </div>
        </>
    )
}

export default BuatForum;