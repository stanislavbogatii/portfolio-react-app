import { NavLink } from "react-router-dom";
import "./project.css";

const Project = ({title, img, index}) => {
    return ( 
        <li className="project">
                <NavLink to = {`/portfolio-react-app/project/${index}`}>
                    <img src={img} alt="Project img" className="project__img"/>
                    <h3 className="project__title">{title}</h3>
                </NavLink>
        </li>
    );
}
 
export default Project;