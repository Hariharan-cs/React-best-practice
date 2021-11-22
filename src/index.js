import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { SnackbarProvider
  // , useSnackbar
 } from 'notistack'
import { store, persistor } from './Redux/CreateStore'

//ROUTING
// import Router from './Screens/Router'
import history from './Redux/BrowserHistory'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 

//THEME
import { ThemeProvider } from '@material-ui/styles'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './Theme/index'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <Router /> */}
            <App />
          </PersistGate>
        </SnackbarProvider> 
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
