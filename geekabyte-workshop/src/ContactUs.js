import React from "react"

import { Link } from 'react-router-dom'

const ContactUs = () => <div className="App">
<header className="App-header">
	<h1 className="App-title">Welcome to Movie-island</h1>
	<Link to="/">Home </Link>
	<Link to="/about">About </Link>
	<Link to="/contact-us">Contact Us </Link>
</header>
<p className="App-intro">Contact Us</p>

</div>

export default ContactUs
