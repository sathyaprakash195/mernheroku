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
        
        fetch('/api/user/getusers')
        .then(response => response.json())
        .then(data => setitems(data));

        

    }



    return (
        <div className="row justify-content-center">
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

                    <tbody>
                        {items.map((item) =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>



                                <td>
                                    {(() => {
                                        if(item.isVerified)
                                            return "Yes";
                                        else
                                           return "No";
                                        
                                    })()}

                                </td>

                                <td>
                                    <Link to={`/update/${item._id}`}>
                                 
                                            <button className="btn btn-danger">Update</button>
                                    
                                    </Link>

                                    <button className="btn btn-primary" onClick={() => deleteuser(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>


                </table>
            </div>
        </div>
    )
}
export default Userslist;