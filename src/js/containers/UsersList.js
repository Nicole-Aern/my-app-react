import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
//css
import '../../css/containers/UsersList.css';
//selectors
import {getIsModalOpen, getUsersList} from '../store/selectors/usersSelectors';
//actions
import {showUserModal, hideUserModal, setUsersList} from '../store/actions/usersActions';
//components
import User from '../components/User';
import Modal from '../components/UI/Modal';
//json data
import users from '../constants/usersList.json';

class UsersList extends Component {
  componentDidMount() {
    const {setUsersList} = this.props;
    setUsersList(users);
  };

  closeModal = () => {
    const {closeUserModal} = this.props;
    closeUserModal();
  };

  openModal = () => {
    const {openUserModal} = this.props;
    openUserModal();
  };

  testMethod = () => {
    console.log("Modal footer button was clicked");
  };

  render() {
    const {open, usersList} = this.props;

    return(
      <Fragment>
        <div className="container usersWrapper">
        {usersList.map((el,i) => (
          <User key={i} openModal={this.openModal} name={el.name}
          email={el.email}
          city={el.address.city}
          phone={el.phone}
          webiste={el.website}
          companyName={el.company.name} />
        ))}
        </div>
        <Modal
          modalClosed={this.closeModal}
          show={open}
          modalTitle="Modal header"
          footerBtnText="close"
          footerBtnListener={this.testMethod}
          useModalHeader={true}
          useModalFooter={true}
        >
          Modal Content
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
      open: getIsModalOpen({state}),
      usersList: getUsersList({state}),
});

const mapDispatchToProps = dispatch => ({
  openUserModal: () => dispatch(showUserModal()),
  closeUserModal: () => dispatch(hideUserModal()),
  setUsersList: (list) => dispatch(setUsersList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
