import employeers_list from '../img/projects/employeers_app.png';
import marvel_app from '../img/projects/marvel_app.png';
import weather_app from '../img/projects/weahter_app.png';

const projects = [
    {
        title: "Weather App",
        skills: "html/css, React.js and JavaScript.",
        description: "API: Geolocation api, Overpass api, Openweathermap api.",
        img: weather_app,
        gitHubLink: "https://github.com/s-user42/weather-app-react",
        pageLink: "https://s-user42.github.io/weather-app-react/"
    },
    {
        title: "Marvel App",
        skills: "html/sass, React.js and JavaScript.",
        description: "API: Marvel api. No mobile adaptation.",
        img: marvel_app,
        gitHubLink: "https://github.com/s-user42/marvel_api_test/tree/main/src",
        pageLink: "https://s-user42.github.io/marvel_api_test/"
    },
    {
        title: "Employeers List App",
        skills: "html/css, React.js and JavaScript.",
        description: "My first mini react app, no mobile adaptation.",
        img: employeers_list,
        gitHubLink: "https://github.com/s-user42/my-app",
        pageLink: "https://s-user42.github.io/my-app/"
    }
]

export {projects}