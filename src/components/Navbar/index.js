import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-primary">
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
						<li className="nav-item">
								<Link to="/home" className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link">about</Link>
							</li>
							<li className="nav-item">
								<Link to="/feature" className="nav-link">Feature</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
