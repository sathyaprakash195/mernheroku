import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import axios from 'axios';
const Userslist = () => {

    const [items, setitems] = useState([]);

    useEffect(() => {
     
        getusers();

    }, [])

    function deleteuser(id) {
        axios.post('/api/user/deleteuserbyid', { id: id }).then(
            res => {
                alert(res.data);
            }
        )

        getusers();

    }

    function getusers() {
        axios.get('/api/user/getusers').then(
            res => {
                console.log(res.data);
                setitems(res.data);

            }
        )
    }



    return (
        <div className="row justify-content-center">


            <button onClick={getusers}>display</button>

            <div className="col-md-7">
                <table className="table table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                 


                </table>
            </div>
        </div>
    )
}
export default Userslist;