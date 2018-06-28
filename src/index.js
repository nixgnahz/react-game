import React from 'react'
import ReactDOM from 'react-dom'
import './rem'
import Router from './router/index'
import './index.scss'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
)