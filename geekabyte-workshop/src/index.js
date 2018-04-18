import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

// Redux store imports
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./reducers"

// Configure store
// DEV extension tool configuration download extension from
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const store = compose(applyMiddleware())(createStore)(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Render the DOM
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)

registerServiceWorker()
