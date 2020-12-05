/**
 * @author kenevy
 * @date  22:17
 * @describe  ''
 */

import { UPDATE_TAG_LIST } from '../constants/tag';


interface IState {
  tag_list: Array<any>
}

const INITIAL_STATE: IState = {
  tag_list: []
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case UPDATE_TAG_LIST:
      return {
        ...state,
        tag_list: action.data,
      };
    default:
      return state
  }
}
