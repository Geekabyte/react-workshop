import React from "react"

import { Link } from 'react-router-dom'

const About = () => <div className="App">
<header className="App-header">
	<h1 className="App-title">Welcome to Movie-island</h1>
	<Link to="/">Home </Link>
	<Link to="/about">About </Link>
	<Link to="/contact-us">Contact Us </Link>
</header>
<p className="App-intro">About Us</p>

</div>

export default About
