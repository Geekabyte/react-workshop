import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
	constructor(props) {
		super(props)

		// bind events
		this.onTabChange = this.onTabChange.bind(this)
	}

	onTabChange(event) {
		console.log("tab clicked ", event)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Movie-island</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<p className="App-intro">Click on the Following Tabs</p>
				<div>
					<span className="tab" onClick={this.onTabChange}>
						Now Showing
					</span>
					<span className="tab" onClick={this.onTabChange}>
						Top Rated
					</span>
				</div>
			</div>
		)
	}
}

export default App
