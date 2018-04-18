import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

// file imports
import Tabbar from "./movie-island/Tabbar"
import axios from "axios"

// API url config
import { nowShowingUrl, topRatedUrl } from "./movie-island/apiConfig"
import List from "./movie-island/List"

// Action Imports
import { storeNowShowing, storeTopRated } from "./reducers/actions"

// connect component to redux store
import { connect } from "react-redux"

class App extends Component {
	constructor(props) {
		super(props)

		// Bind events
		this.onTabSelected = this.onTabSelected.bind(this)
		this.state = {
			selectedType: "now_showing",
		}
	}

	componentDidMount() {
		this.fetchData(this.state.selectedType)
	}

	onTabSelected(selectedType) {
		this.setState({
			selectedType,
		})
		this.fetchData(selectedType)
	}

	fetchData(selectedType) {
		// AJAX call to get the API response
		switch (selectedType) {
			case "now_showing":
				axios.get(nowShowingUrl).then(response => {
					this.props.dispatch(storeNowShowing(response.data.results))
				})
				break
			case "top_rated":
				axios.get(topRatedUrl).then(response => {
					this.props.dispatch(storeTopRated(response.data.results))
				})
				break
		}
	}

	render() {
		const { selectedType } = this.state
		const { nowShowing, topRated } = this.props
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Movie-island</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<p className="App-intro">Click on the Following Tabs</p>
				<Tabbar onTabSelected={this.onTabSelected} selectedType={selectedType} />
				{selectedType === "now_showing" && nowShowing && <List data={nowShowing} />}
				{selectedType === "top_rated" && topRated && <List data={topRated} />}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		nowShowing: state.movies.nowShowing,
		topRated: state.movies.topRated,
	}
}

export default connect(mapStateToProps)(App)
