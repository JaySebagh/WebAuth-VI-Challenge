import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './Login/Login'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </main>
      </>
    );
  }
}

function Home(props) {
  return <h1>Home Component</h1>
}

export default App;
