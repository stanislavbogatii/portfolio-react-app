import "./btnView.css";

const BtnView = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline btn-view">
            View
        </a>
    );
}
 
export default BtnView;