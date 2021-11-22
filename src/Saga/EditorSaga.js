import { put, call } from 'redux-saga/effects'
import * as EditorActions from '../Redux/Editor/EditorAction'


export function* getEditorDetails(api, { payload }) {
    try {
      let res = yield call(api.getEditorDetails, payload)
      yield put(EditorActions.getEditorSuccess(res))
    } catch (error) {
      yield put(EditorActions.getEditorFailure(error))
    } 
  }

// export function* addEmailConfiguration(api, { payload }) {
//   try {
//     let res = yield call(api.addEmailConfiguration, payload)
//     yield put(EditorActions.addEmailConfigurationSuccess(res))
//     yield call(getEmailConfiguration, api, payload)
//   } catch (error) {
//     yield put(EditorActions.addEmailConfigurationFailure(error))
//   }
// }
// export function* getEmailConfiguration(api, { payload }) {
//   try {
//     let res = yield call(api.getEmailConfiguration, payload)
//     yield put(EditorActions.getEmailConfigurationSuccess(res))
//   } catch (error) {
//     yield put(EditorActions.getEmailConfigurationFailure(error))
//   }
// }