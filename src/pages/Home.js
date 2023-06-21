import Header from "../components/header/Header";

const Home = () => {
    return (  
        <>
            <Header/>

            <main className="section">
                <div className="container">
                    <h1 className="main-title">Skills</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, HTML, CSS, BootStrap, SCSS, SASS, GIT</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
 
export default Home;