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


    function getdata()
    {
       axios.get('/api/user/getusersp').then(
           res=>{
               if(res.data)
               console.log(res.data);
               else
               alert('failed');
           }
       )
       
    }

    

    return (
        <div className="row justify-content-center">


            <div className="col-md-5">
            <h1>Hii ,{email}</h1>
            <h1>Welcome To MernCrud</h1>
            <img src="https://ksreddys.in/covidstats/images/rlogob.jpg" className="img-fluid"/>
            </div>
            
            <button onClick={getdata}>get data</button>


        </div>
    );
}

export default Dashboard;