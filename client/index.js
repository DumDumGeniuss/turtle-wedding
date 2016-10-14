import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import AllRoutes from '../common/route/AllRoutes.jsx'

import blogStore from '../common/store/blogStore'

const initialState = window.__INITIAL_STATE__
const store = blogStore(initialState)
const app = document.getElementById('app')

ReactDOM.render(
	<Provider store={store}>
		<AllRoutes />
	</Provider>
, app)
