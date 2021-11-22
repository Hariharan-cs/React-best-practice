import * as EditorConstants from "./EditorConstants";

const INITIAL_STATE = {
  offset: 0,
  limit: 10,
  tags: [],
  defaultTagsGroups: [],
  manualTags: [],
  tagsByDataSource: [],
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EditorConstants.GET_EDITOR:
      return {
        ...state,
      };
    case EditorConstants.GET_EDITOR_SUCCESS:
      return {
        ...state,
        tags: action.payload,
      };
    case EditorConstants.GET_EDITOR_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
