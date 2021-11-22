import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as editor } from './Editor/EditorReducer'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    editor
  })

export default rootReducer
