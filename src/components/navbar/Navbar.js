import "./navbar.css";

import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function Navbar() {


	const activeLink = "nav-list__link nav-list__link--active";
	const inactiveLink = "nav-list__link";

    return (
      	<nav className="nav">
			<div className="container">
				<div className="nav-row">
					
					<NavLink to="portfolio-react-app/" className="logo">
						<strong>My</strong> portfolio
					</NavLink>

					<BtnDarkMode/>

					<ul className="nav-list">

						<li className="nav-list__item">
							<NavLink to="portfolio-react-app/" className={({isActive}) => isActive ? activeLink : inactiveLink}>
								Home
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink to="portfolio-react-app/projects" className={({isActive}) => isActive ? activeLink : inactiveLink}>
								Projects
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink to="portfolio-react-app/contacts" className={({isActive}) => isActive ? activeLink : inactiveLink}>
								Contacts
							</NavLink>
						</li>
							
					</ul>
				</div>
			</div>
		</nav>
    )
}

export default Navbar;