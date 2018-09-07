import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './reset.css';

import Blog from './Components/Blog';
import Posts from './Components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Blog} />
          <Route path='/posts' component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default App;
