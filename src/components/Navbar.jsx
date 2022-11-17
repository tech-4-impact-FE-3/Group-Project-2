import React from 'react';
import logo from "../img/logo.png";
import profile from "../img/profile.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
                            Explore<span>ASEAN</span>
                        </a>
                        <form className="form d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search for forum" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="profile d-flex align-content-end align-items-end">
                            <img src={profile} alt="profile" width="30" height="24" className="d-inline-block align-text-center" />
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Profile
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
