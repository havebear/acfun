import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Article from '../../pages/Article'

class Main extends Component {
    render() {
      return (
        <div className="main">
          <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/article' component={Article}></Route>
          </Switch>
        </div>
      );
    }
  }
  
  export default Main;
