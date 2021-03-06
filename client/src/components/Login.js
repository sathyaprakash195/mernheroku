import React, { Component, useState } from 'react';
import { Route, withRouter, Redirect, useHistory, Router, } from 'react-router-dom';
import { Modal,Spinner } from 'react-bootstrap';

import axios from 'axios';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
const Login = () => {

    const history = useHistory();
    const [show, setShow] = useState(false);

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [spinner ,setspinner]=useState('none');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function loginuser() {
        setspinner('inline');
        var user = {

            email: email,
            password: password

        }

        axios.post('/api/user/loginuser', user).then(
            res => {
                setspinner('none');
                if (res.data.token) {

                    localStorage.setItem('loggedin', res.data.token);
                    handleShow();
  
                }
                else if (res.data == '1') {
                    alert('email verification is pending');
                }
                else {
                    alert('Invalid username or password');
                }
            }
        )

    }


    function proceed () {
       
        history.push('/dashboard');
       
    }


    

    return (
        <div className="row justify-content-center">

            <div className='col-md-4'>
               
            <Spinner animation="border spinner" role="status" style={{display:spinner}}>
            <span className="sr-only">Loading...</span>
           </Spinner>

                <div className="m-2 p-2 z-depth-1">

                    <h1 className="mb-4">Login Page</h1>

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

                    <button onClick={loginuser} className='btn btn-primary'>Login</button>
                </div>

               
               


            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closebutton>
                    <Modal.Title>Congratulations</Modal.Title>
                </Modal.Header>
                <Modal.Body>Login Successfull</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={proceed}>
                        Ok
                   </button>
                </Modal.Footer>
            </Modal>



        </div>

    )
}
export default Login;