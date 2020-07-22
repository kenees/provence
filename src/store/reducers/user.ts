import { SET_USER_INFO } from '../constants/user'

interface IState {
  user_info: any,
  age: number,
}

const INITIAL_STATE: IState = {
  user_info: {},
  age: 111,
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        age: action.data,
      };
    default:
      return state
  }
}
