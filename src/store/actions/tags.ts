import { UPDATE_TAG_LIST } from '../constants/tag';

const updateTagList = (data) => {
  return {
    type: UPDATE_TAG_LIST,
    data: data || []
  }
};

export {
  updateTagList,
}
