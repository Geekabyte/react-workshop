import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import About from "./About"
import ContactUs from "./ContactUs"

const AppRouter = () => (
	<Router>
		<div>
			<Route path="/" exact component={App} />
			<Route path="/about" component={About} />
			<Route path="/contact-us" component={ContactUs} />
		</div>
	</Router>
)

export default AppRouter
