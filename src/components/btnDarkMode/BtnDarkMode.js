import { useEffect } from "react";

import { useLocalStorage } from "../../utils/useLocalStorage";

import Sun from "../../img/icons/Sun.svg";
import Moon from "../../img/icons/Moon.svg";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [darkMode])


    const toggleMode = () => {
        setDarkMode(!darkMode);
    }


    const darkModeStyle = "dark-mode-btn dark-mode-btn--active";
    const lightModeStyle = "dark-mode-btn";
    
    return (
        <button 
        className={darkMode ? darkModeStyle : lightModeStyle} 
        onClick={toggleMode}>
			<img src={Sun} alt="Light mode" className="dark-mode-btn__icon"/>
			<img src={Moon} alt="Dark mode" className="dark-mode-btn__icon"/>
		</button>
    );
}
 
export default BtnDarkMode;