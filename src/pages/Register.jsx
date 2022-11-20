import React from "react";
import { useState } from "react";
import Gambar from "../components/Gambar";
import RegisterButton from "../components/RegisterButton";
import ReturnButton from "../components/ReturnButton";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState({});

    return (
        <>
        <div className="container register-page">
        <div className="row align-items-center">
            <div class="col register-image">
            <h1><strong>Register</strong></h1>
            <Gambar />
            <div className="return-btn align-self-start">
            <ReturnButton />
        </div>
    </div>
    <div className="login-text d-flex flex-column align-items-center">
                <h1>Register</h1>
                <div className="form-Register">
                    <form action="" onSubmit={handleSubmit} className="d-flex flex-column">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="submit">Submit</label>
                        <input type="text" value={submit} onChange={(e) => setSubmit(e.target.value)}/>
                        <RegisterButton />
                    </form>
                </div>
          </div>
    </div>
</div>
        </>
    );
};

export default Register;