import React, { Component, useState } from 'react';
import axios from 'axios';
import { Route, withRouter, Redirect, useHistory, Router, } from 'react-router-dom';

import { Modal,Spinner } from 'react-bootstrap';

const Register = () => {

    const history=useHistory();
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [spinner ,setspinner]=useState('none');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function registeruser() {
        setspinner('inline');
        var user = {
            name: name,
            username: username,
            email: email,
            password: password

        }
        
        axios.post('/api/user/registeruser', user).then(
            res => {
                setspinner('none');
                if(res.data=="1")
                {
                    handleShow();
                    setname('');
                    setusername('');
                    setpassword('');
                    setemail('');
                }
                else
                {
                     alert(res.data);
                }
               
            }
        )

    }

    function proceed () {
       history.push('/login');
    }

    return (
        <div className="row justify-content-center">
            
            <div className='col-md-4'>
                
            <Spinner animation="border spinner" role="status" style={{display:spinner}}>
            <span className="sr-only">Loading...</span>
           </Spinner>
                
                <div className="m-2 p-2 z-depth-1">
                <h1 className="mb-4">Register Page</h1>
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
      
           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closebutton>
                    <Modal.Title>Congratulations</Modal.Title>
                </Modal.Header>
                <Modal.Body>Registration Successfull,Please Verify your email</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={proceed}>
                        Click Here To Login
                   </button>
                </Modal.Footer>
            </Modal>
      
        </div>

    )
}
export default Register;