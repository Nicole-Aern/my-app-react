import React, {Component, Fragment} from 'react';
//components
import Header from '../../components/Header';
import UsersList from '../UsersList';
import Footer from '../../components/Footer';

class Users extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <UsersList />
        <Footer />
      </Fragment>
    )
  }
}

export default Users;
