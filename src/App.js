import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Feature from "./components/pages/Feature";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
			</Routes>
		</Router>
	);
}

export default App;
