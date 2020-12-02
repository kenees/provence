import { SET_MUSIC_LIST } from '../constants/music';

const setMusicList = (data) => {
  return {
    type: SET_MUSIC_LIST,
    data: data || {}
  }
};

export {
  setMusicList,
}
