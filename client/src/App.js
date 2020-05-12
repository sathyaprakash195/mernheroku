import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  function getresponse () {
     axios.get('api/sendname').then(res=>{
       alert(res.data.name +" hi");
       console.log(res.data.name+"hii");
     })
     
  }

  return (
    <div className="App">
          <h1>Hello Welcome To MernStack by sathys</h1>
          <button onClick={getresponse}>get response</button>
    </div>
  );
}

export default App;
