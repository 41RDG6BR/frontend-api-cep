
import React, { Component } from 'react'
import Home from '../src/components/Home'
import HomePage from '../src/components/HomePage'
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import Dashboard from '../src/components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';



class App extends Component {
 render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />            
          </Switch>
        </Router>
    )
    }

  }

  export default App
