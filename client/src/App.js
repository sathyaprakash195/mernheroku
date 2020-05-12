import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Userslist from './components/Userslist';
import Update from './components/Update';




class App extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
        <Router>

          <h1>MernStack Crud App</h1>
          <hr />
          <Navbar />

          <Switch>
            
            <Route path="/" component={Login} exact strict />
            <Route path='/login' component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/userslist" component={Userslist} exact />
            <Route path="/update/:id" component={Update} exact />
            <Route path='/dashboard' component={Dashboard} exact />

          </Switch>
        </Router>




      </div>
      </React.Fragment>
    );
  }
}

export default App;
