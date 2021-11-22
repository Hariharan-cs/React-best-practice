import { all, takeLatest,
    //  takeEvery, throttle, take
     } from 'redux-saga/effects'
import * as EditorConstants from '../Redux/Editor/EditorConstants'
import * as EditorSaga from './EditorSaga'

import API from '../Services/apis'
export const api = API


export default function* root() {
    yield all([
        takeLatest(EditorConstants.GET_EDITOR, EditorSaga.getEditorDetails, api), //have changed in api.js, need to change here
    ])
}