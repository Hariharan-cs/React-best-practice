import apisauce from 'apisauce'
//import * as employeeActions from '../Redux/Employee/EmployeeActions'
import { store } from '../Redux/CreateStore'

let employeeActions;
const jwt = require('jsonwebtoken')

let api = apisauce.create({
    baseURL: `/v2/api`,
    timeout: 200000,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('oneDPO')}`,
    },
  })

  api.addRequestTransform(async request => {
  try {
    let msalIdToken = localStorage.getItem('msal.idtoken')
    // let onedpoToken = localStorage.getItem('oneDPO')
    if (msalIdToken) {
      request.headers['idToken'] = msalIdToken
      let decodedJwt = jwt.decode(msalIdToken)
      let now = Date.now().valueOf() / 1000
      //check if its been 15 minutes that the token is generated
      if (now > decodedJwt.exp && request.url !== '/logout') {
        console.log('id token is expired will logout')
        store.dispatch(employeeActions.logOut())
      } else {
        if (now > decodedJwt.exp - 2700 && request.url !== '/logout') {
          console.log('its been more than 15 minutes, renew id token')
        //   store.dispatch(azureAdActions.renewIdToken())
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
})

api.addResponseTransform(async response => {
    try {
      if (response.status === 401 && response.config.url !== '/logout') {
        store.dispatch(employeeActions.logOut())
      }
    } catch (error) {
      console.log(error)
    }
  })


export default {
  getEditorDetails: async payload => {
    let res = await api.get('/editorDetails')
    return res.data || {}
  }
}