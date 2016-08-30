import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'


export default function configureStore(preloadedState) {
    const blogStore = createStore(rootReducer, preloadedState, applyMiddleware(thunk))
    
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            blogStore.replaceReducer(nextReducer)
        })
    }
    
    return blogStore
}