import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HomePage from './js/containers/pages/Homepage';
import Users from './js/containers/pages/UsersPage';

class App extends Component {
  render() {
    return(
        <Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" component={Users} />
        </Fragment>
    );
  }
}


export default App;
