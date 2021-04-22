import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {
  
  state = {};
  
  componentDidMount = () => {
    axios.get('users')
    .then(
      res => {
       this.setUser(res.data);
      },
      err => {
        console.log(err)
      }
    )
};

setUser = user => {
  this.setState({
    user: user
  });
};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav user={this.state.user} setUser={this.setUser} />

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user}/>} />
                <Route exact path="/login" component={() => <Login setUser={this.setUser}/>} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
      
    );
  }
}
// https://www.youtube.com/watch?v=kLq6j7AFjKE&list=PLlameCF3cMEtZH83hCWfpb_7d3pYHOTGq

