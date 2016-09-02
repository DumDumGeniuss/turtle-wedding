import React     from 'react';
import { Route, IndexRoute } from 'react-router'

/* Welcome */
import Welcome from '../containers/welcome/Welcome.jsx'

/* Layout */
import Layout from '../components/layout/main/Layout.jsx'

export default (
	<Route path="/" component={Layout}>
	    <IndexRoute component={Welcome}>
	    </IndexRoute>
	</Route>
)