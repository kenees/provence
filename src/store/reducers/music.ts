/**
 * @author kenevy
 * @date  22:43
 * @descript  ''
 */

import { SET_MUSIC_LIST } from '../constants/music'

interface IState {
  music_list: Array<any>
}

const INITIAL_STATE: IState = {
  music_list: []
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_MUSIC_LIST:
      return {
        ...state,
        music_list: action.data,
      };
    default:
      return state
  }
}
