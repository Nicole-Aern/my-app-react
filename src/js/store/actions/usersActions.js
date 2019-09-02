import {
      SHOW_USER_MODAL,
      HIDE_USER_MODAL,
      SET_USERS_LIST}
    from '../actionTypes';

export const showUserModal = () => ({
  type: SHOW_USER_MODAL,
});

export const hideUserModal = () => ({
  type: HIDE_USER_MODAL,
})

export const setUsersList = (list) => ({
  type: SET_USERS_LIST,
  list: list
});
