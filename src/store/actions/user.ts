import { SET_USER_INFO } from '../constants/user';

const setUserInfo = (data) => {
  return {
    type: SET_USER_INFO,
    data: data || {}
  }
};

export {
  setUserInfo,
}
