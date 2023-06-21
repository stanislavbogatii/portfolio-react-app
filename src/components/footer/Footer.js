import "./footer.css";

import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import github from "../../img/icons/gitHub.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";

const Footer = () => {
    return (
        <footer className="footer">
				<div className="footer__wrapper">
					<ul className="footer__icons">
						<li className="icon">
							<a href="https://vk.com/id342749928">
								<img src={vk} alt="vk icon"/>
							</a>
						</li>
						<li className="icon">
							<a href="https://www.instagram.com/stanislav.bogatiy/">
								<img src={instagram} alt="instagram icon"/>
							</a>
						</li>
						<li className="icon">
							<a href="#!">
								<img src={twitter} alt="twiter icon"/>
							</a>
						</li>
						<li className="icon">
							<a href="https://github.com/s-user42">
								<img src={github} alt="github icon"/>
							</a>
						</li>
						<li className="icon">
							<a href="https://www.linkedin.com/in/stanislav-bogatii-1671b927a/">
								<img src={linkedin} alt="linkedin icon"/>
							</a>
						</li>
					</ul>
					<div className="footer__link">
						<p>© 2023 frontend-dev.com</p>
					</div>
				</div>
			</footer>
    );
}
 
export default Footer;