import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './reset.css';

import Blog from './Components/Blog';
import Posts from './Components/Posts';
import PostList from './Components/PostList';
import Postt from './Components/Postt';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Switch>
          <Route path='/' exact component={Posts} />
          <Route path='/posts' component={Blog} />
          <Route  path='/postlist' component={ PostList } />
          <Route  path='/post/:id' component={ Postt } />
        </Switch>
      </div>
    );
  }
}

export default App;
