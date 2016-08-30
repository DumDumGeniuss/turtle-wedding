delete process.env.BROWSER

import Express from 'express'
import React from 'react'
import _ from 'lodash'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactDomServer from 'react-dom/server'

import Promise from 'promise'
import rp from 'request-promise'
import url from 'url'

import blogStore from '../src/store/blogStore'
import createLocation from 'history/lib/createLocation'
import rootReducer from '../src/reducers'
import routes from '../src/route/routes.jsx'

import config from '../server/config/production'


const app = Express()
const port = config.port
app.use(Express.static(__dirname + '/public'))

app.use('*', function(req, res) {
    const initialState = {},
        ogTagParams = {
            url: "http://dumdumgenius.com",
            type: 'blog',
            title: "DumDumGenius' Blog",
            description: "Welcome to dumdumgenius' blog, it's my first blog, enjoy every thing you see"
                + " and of course, if you have any advice to me, please contact me, the email can be found"
                + " in about me page, thank you, sincerely, Messi Yang"
        }
    handleRender(req, res, initialState, ogTagParams)
})


function handleRender(req, res, initialState, ogTagParams) {

  	const store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  	    location = createLocation(req.originalUrl)

  	match({ routes, location }, function(error, redirectLocation, renderProps) {
    	// if (err) { 
    	//   console.error(err)
    	//   return res.status(500).end('Internal server error')
    	// }
    	if (!renderProps) {
    		return res.status(404).end('Not found.')
    	}
    	
    	const html = ReactDomServer.renderToString(
  			<Provider store={store}>
    			<RouterContext {...renderProps} />
  			</Provider>
    	)

	
  		const initialState = store.getState()

	
  		res.send(renderFullPage(html, initialState, ogTagParams))
	})
}

function renderFullPage(html, initialState, ogTagParams) {
  	return `
  	  	<!doctype html>
  	  	<html>
  	  	  	<head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="google-site-verification" content="mU8vb5Hbce4m1TA7OFv5zsdvntNy-sHQ_6PZfFUsbeM" />
                <meta property="og:url" content="${ogTagParams.url}" />
                <meta property="og:type" content="${ogTagParams.type}" />
                <meta property="og:title" content="${ogTagParams.title}" />
                <meta property="og:description" content="${ogTagParams.description}" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/coverImages%2FfbCoverPhoto.jpg?alt=media" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="200" />
  	  	  	 	<title>${ogTagParams.title}</title>
                <link rel="stylesheet" type="text/css" href="/styles.css">
                <style>
                    body {
                        margin: 0px;
                    }
        
                    * {
                        box-sizing: border-box;
                        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                    }
                    
                    a {
                        text-decoration: none;
                        cursor: none;
                    } 
        
                    a:hover {
                    }
                </style>
  	  	  	</head>
  	  	  	<body>
  	  	  	  	<div id="app">${html}</div>
  	  	  	  	<script>
  	  	  	    	window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
  	  	  	  	</script>
  	  	  	  	<script src="/main.min.js" charset="utf-8"></script>
  	  	  	</body>
  	  	</html>
  	  	`
}

app.listen(port, function() {
	console.log('Start!')
})
