import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnView from "../components/btnView/BtnView";

import { projects } from "../helpers/projectsList";


const Project = () => {

    const {id} = useParams();
    const {description, img, gitHubLink, pageLink, title} = projects[id];

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{title}</h1>
                    <img src={img} alt="" className="project-details__cover"/>
                    <div className="project-details__description">
                        <p className="skills">Skills: {description}</p>
                        <p className="apis">Description: {description}</p>
                    </div>
                    
                    
                    <div className="project__btns">
                        {gitHubLink && <BtnGitHub link = {gitHubLink}/>}
                        {pageLink && <BtnView link = {pageLink}/>}
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
 
export default Project;