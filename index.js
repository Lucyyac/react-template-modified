import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import RootComponent from './src/components/Root.component'
import rootReducer from './src/scripts/reducers/reducer'
import { watchGetPersona } from './src/scripts/sagas'
import createSagaMiddleware from 'redux-saga'
import ContenedorComponente from './contenedorComponente'
//import ApiComponent from './apiComponent'
/*ReactDom renderizar en HTML recibe componente q renderiza y donde lo renderiza
*/
ReactDom.render(<ContenedorComponente />, document.getElementById('renderer'))
//ReactDom.render(<ApiComponent />, document.getElementById('renderer'))