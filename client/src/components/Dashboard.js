import React, { Component, useState, useEffect } from 'react';
import decode from 'jwt-decode';

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
        <div>
            <h1>Hii ,{email}</h1>
            <h1>Welcome To MernCrud</h1>
        </div>
    );
}

export default Dashboard;