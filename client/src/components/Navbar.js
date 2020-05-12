import React,{ Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route,useHistory } from 'react-router-dom';
import Login from './Login';
import App from './../App';
function Navbar() {

    const history=useHistory();
    


    function logout() {
        localStorage.removeItem('loggedin');
        history.push('/');
    }


    return (
        <div>


            <nav>

                {(() => {

                    if (!localStorage.getItem('loggedin')) {
                        return (
                            <div style={{ display: "inline" }}>
                                <Link to='/login'>
                                    <li className="btn btn-primary">Login</li>
                                </Link>
                                <Link to='/register'>
                                    <li className="btn btn-primary">Register</li>
                                </Link>
                            </div>

                        );
                    }
                    else {
                        return (
                            <div style={{ display: "inline" }}>
                                <Link to='/dashboard'>
                                    <li className="btn btn-primary">Dashboard</li>
                                </Link>
                                <Link to='/userslist'>
                                    <li className="btn btn-primary">Userslist</li>
                                </Link>
                                <li className="btn btn-primary" onClick={logout}>LogOut</li>
                            </div>
                        )
                    }


                })()}






                <hr />



            </nav>


        </div>
    );
}

export default Navbar;