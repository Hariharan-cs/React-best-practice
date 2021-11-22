import { applyMiddleware, createStore, compose } from 'redux'
import {
  //  connectRouter, 
  routerMiddleware } from 'connected-react-router/immutable'
import createSagaMiddleware from 'redux-saga'
import history from './BrowserHistory'
import rootReducer from './RootReducer'
import rootSaga from '../Saga' 
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'employee', 
  storage: storage,
  whitelist: [''],
  //stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(persistConfig, rootReducer(history))

let store = createStore(pReducer, composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware)))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

store.subscribe(() => {})

export { persistor, store }
