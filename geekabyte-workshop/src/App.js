import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

// file imports
import Tabbar from "./movie-island/Tabbar"

class App extends Component {
	constructor(props) {
		super(props)

		// bind events
		this.onTabChange = this.onTabChange.bind(this)

		// initial state
		this.state = { selectedType: "now_showing" }
	}

	onTabChange(event) {
		const selectedType = event.target.getAttribute("data-type")

		this.setState({
			selectedType, // No need of writing selectedType : selectedType // ES6 syntax
		})
	}

	render() {
		const { selectedType } = this.state,
			isNowShowingSelected = selectedType === "now_showing",
			isTopRatedSelected = selectedType === "top_rated"

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Movie-island</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<p className="App-intro">Click on the Following Tabs</p>
				<div>
					<span
						className={`tab ${isNowShowingSelected ? "selected" : ""}`}
						onClick={this.onTabChange}
						data-type="now_showing"
					>
						Now Showing
					</span>
					<span
						className={`tab ${isTopRatedSelected ? "selected" : ""}`}
						onClick={this.onTabChange}
						data-type="top_rated"
					>
						Top Rated
					</span>
				</div>
				<Tabbar />
			</div>
		)
	}
}

export default App
