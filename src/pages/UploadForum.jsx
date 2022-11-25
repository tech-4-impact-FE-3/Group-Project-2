import React from "react";
import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

const UploadForum = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [kategori, setKategori] = useState("");
    const [uploadforum, setUploadForum] = useState({});

    // console.log(username, password);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Username: ${username}, Password: ${password}');
        setUploadForum({title, desc, kategori});

        axios.post("https://6379ea2d7419b414df95e16c.mockapi.io/forum", {
            title: title,
            desc: desc,
            kategori: kategori
          })
      .then((result) => {
          console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      })
        setTitle("");
        setDesc("");
        setKategori("");
    };

    console.log(uploadforum);

    return (
        <div className="upload-forum">
        <Navbar />
        <div className="container-upload">
        <h1>Upload Forum</h1>
        <br />
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="desc">Add your forum description here!</label>
                <textarea className="form-control" id="desc" rows="7" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="form-group">
                <select className="selectform" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="politics">Politics</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                </select>
                </div>
                <button type="submit" className="btn-darker btn btn-primary mt-4">Upload</button>
            </form>
        </div>
        </div>
    );
};

export default UploadForum;