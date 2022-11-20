import React from 'react';
import BarKategori from '../components/BarKategori';
import BuatForum from '../components/BuatForum';
import Navbar from '../components/Navbar';
import education from "../img/asean-education.jpg";
import politik from "../img/asean-politik.jpg";
import kesehatan from "../img/asean-kesehatan.jpg";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar /> 
            <div className="d-flex justify-content-between">
                <BarKategori />  
                <div className="container-forum">
                    <h2>Trending Forum</h2>
                    <div className="forum">
                        <img src={education} alt="image" />
                        <div className="forum-info">
                            <a href="#">
                                <h3>Pemerintah Indonesia Ajak Negara ASEAN Fokus Pulihkan Pendidikan</h3>
                            </a>
                        </div>
                        <div className="overview">
                            Dalam pertemuan ke-12 Menteri Pendidikan se-ASEAN (Twelfth ASEAN Education Minister Meeting/12th ASED) di Hanoi, Vietnam, pada 13-14 Oktober 2022..
                        </div>
                    </div>
                    <div className="forum">
                        <img src={politik} alt="image" />
                        <div className="forum-info">
                            <h3>9 Bentuk Kerjasama dalam Bidang Politik ASEAN</h3>
                        </div>
                        <div className="overview">
                            bermanfaat bagi para pelajar dan umum dalam memahami apa saja jenis-jenis kerjasama yang diterapkan para negara Asia Tenggara hingga kini..
                        </div>
                    </div>
                    <div className="forum">
                        <img src={kesehatan} alt="image" />
                        <div className="forum-info">
                            <h3>Indonesia akan dorong penguatan kerja sama kesehatan ASEAN pada 2023</h3>
                        </div>
                        <div className="overview">
                            Kita kan ingin ASEAN menjadi episentrum pertumbuhan ekonomi, kan tidak mungkin ekonomi tumbuh kalau orangnya pada sakit maka integrasi ASEAN harus semakin diperkuat termasuk di bidang kesehatan..
                        </div>
                    </div>
                </div>
                <BuatForum />
            </div>
        </div>
    )
}

export default Dashboard;
