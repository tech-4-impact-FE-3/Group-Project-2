import React from 'react';
import BarKategori from '../components/BarKategori';
import BuatForum from '../components/BuatForum';
import Navbar from '../components/Navbar';
import ContainerForum from '../components/ContainerForum';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar /> 
            <div className="d-flex justify-content-between">
                <BarKategori />  
            <div className = "ContainerForum">
                <ContainerForum />
            </div>
                <BuatForum />
            </div>
        </div>
    )
}

export default Dashboard;
