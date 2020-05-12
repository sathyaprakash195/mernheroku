import React, { Component, useState } from 'react';
import axios from 'axios';
const Register = () => {

    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');


    function registeruser() {
        var user = {
            name: name,
            username: username,
            email: email,
            password: password

        }

        axios.post('/api/user/registeruser', user).then(
            res => {
                alert(res.data);
                setname('');
                setusername('');
                setpassword('');
                setemail('');
                
            }
        )

    }

    return (
        <div className="row justify-content-center">
            
            <div className='col-md-4'>
                <h1>Register Page</h1>
                
                <div className="m-2 p-2">

                    <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />

                    <input type="text"
                        className="form-control"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => { setusername(e.target.value) }}
                    />

                    <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />

                    <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />

                    <button onClick={registeruser} className='btn btn-primary'>Register</button>
                </div>



            </div>
        </div>

    )
}
export default Register;