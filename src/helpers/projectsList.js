import employeers_list from '../img/projects/employeers_app.png';
import marvel_app from '../img/projects/marvel_app.png';
import weather_app from '../img/projects/weahter_app.png';
import crypto_currency_app from '../img/projects/crypto_currency_app.png';
import seo_checker_app from '../img/projects/seo_checker_app.png';

const projects = [
    {
        title: "SEO Checker",
        skills: "React project, under the domain name seo.extensive.digital, reCAPTCHA v3",
        description: "API: Google PageSpeed Insights",
        img: seo_checker_app,
        gitHubLink: "https://github.com/stanislavbogatii/seo_tester-react-app",
        pageLink: "https://saot.seolitte.com"
    },
    {
        title: "Weather App",
        skills: "html/css, React.js and JavaScript.",
        description: "API: Geolocation api, Overpass api, Openweathermap api.",
        img: weather_app,
        gitHubLink: "https://github.com/stanislavbogatii/weather-app-react",
        pageLink: "https://stanislavbogatii.github.io/weather-app-react/"
    },
    {
        title: "Marvel App",
        skills: "html/sass, React.js and JavaScript.",
        description: "API: Marvel api. No mobile adaptation.",
        img: marvel_app,
        gitHubLink: "https://github.com/stanislavbogatii/marvel_api_test/tree/main/src",
        pageLink: "https://stanislavbogatii.github.io/marvel_api_test/"
    },
    {
        title: "Employeers List App",
        skills: "html/css, React.js and JavaScript.",
        description: "My first mini react app, no mobile adaptation.",
        img: employeers_list,
        gitHubLink: "https://github.com/stanislavbogatii/my-app",
        pageLink: "https://stanislavbogatii.github.io/my-app/"
    },
    {
        title: "Crypto Currency App",
        skills: "html/css, React.js and JavaScript.",
        description: "API: Crypto API. Used material-ui library.",
        img: crypto_currency_app,
        gitHubLink: "https://github.com/stanislavbogatii/react_crypto_app",
        pageLink: "https://stanislavbogatii.github.io/react_crypto_app/"
    }
]

export {projects}