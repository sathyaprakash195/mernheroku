import React, { Component, useState, useEffect } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';
import { Route, withRouter, Redirect, useHistory, Router,BrowserRouterasRouter } from 'react-router-dom';

function Dashboard(props) {
    
    
    const history=useHistory();
    const token=localStorage.getItem('loggedin');
    const[email,setemail]=useState();

  
    useEffect(()=>{
      
        if(localStorage.getItem('loggedin'))
        {
            const decoded=decode(token);
            setemail(decoded.name);
        }
        else{
            history.push('/login');
        }
    })

    return (
        <div className="row justify-content-center">


            <div className="col-md-5">
            <h1>Namaste ,{email}</h1>
            <h1>Welcome To MernCrud</h1>
            <img src="https://ksreddys.in/covidstats/images/rlogo.png" className="img-fluid"/>
            </div>
            
           


        </div>
    );
}

export default Dashboard;