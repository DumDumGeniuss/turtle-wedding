import React     from 'react';
import { Route, IndexRoute } from 'react-router'

/* Welcome */
import Welcome from '../containers/welcome/Welcome.jsx'

/* Layout */
import Layout from '../components/layout/main/Layout.jsx'

/* Photo */
import CreatePhoto from '../containers/photos/CreatePhoto.jsx'
import Photos from '../containers/photos/Photos.jsx'

export default (
	<Route path="/" component={Layout}>
	    <IndexRoute component={Welcome}>
	    </IndexRoute>
	    <Route path="/photos" component={Photos}>
	    </Route>
	    <Route path="/photos/create" component={CreatePhoto}>
	    </Route>
	</Route>
)