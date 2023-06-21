import "./styles/main.css";

import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

import ScrollToTop from "./utils/scrollToTop";


function App() {
	return (
		<div className="App">
			<HashRouter>
				<ScrollToTop/>
				<Navbar/>

				<Routes>
					<Route exact  path="/portfolio-react-app/" element={<Home/>}/>
					<Route exact  path="portfolio-react-app/projects" element={<Projects/>}/>
					<Route exact  path="portfolio-react-app/project/:id" element={<Project/>}/>
					<Route exact  path="portfolio-react-app/contacts" element={<Contacts/>}/>
				</Routes>

				<Footer/>

			</HashRouter>
    	</div>
  	);
}

export default App;
