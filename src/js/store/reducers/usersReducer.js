import {
    SHOW_USER_MODAL,
    HIDE_USER_MODAL,
    SET_USERS_LIST,
  SET_NAME}
 from '../actionTypes';
import {updateObject} from '../utility';

const initialState = {
  isModalOpen: false,
  usersList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_USER_MODAL: {
        return updateObject(state, {isModalOpen: true});
      }
      case HIDE_USER_MODAL: {
        return updateObject(state, {isModalOpen: false});
      }
      case SET_USERS_LIST: {
        return updateObject(state, {usersList: action.list});
      }
      default:
        return state;
    }
}

export default reducer;
