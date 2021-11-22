import * as EditorConstants from "./EditorConstants";

export const getEditor = (payload) => ({
  type: EditorConstants.GET_EDITOR,
  payload,
});
export const getEditorSuccess = (payload) => ({
  type: EditorConstants.GET_EDITOR_SUCCESS,
  payload,
});
export const getEditorFailure = (payload) => ({
  type: EditorConstants.GET_EDITOR_FAILURE,
  payload,
});
