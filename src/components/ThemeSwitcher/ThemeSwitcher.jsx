import { useEffect, useState } from "react";
import { getCurrentTheme, toggleTheme } from "../../utils/themeHandler";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { AppConstatnts } from "../../constants/constants";

function ThemeSwitcher(){
    const [theme,setTheme] = useState(AppConstatnts.DARK);

    useEffect(()=>{
        const currTheme = getCurrentTheme();
        setTheme(currTheme);
    },[]);

    function handleToggleTheme(){
        toggleTheme();
        const currTheme = getCurrentTheme();
        setTheme(currTheme);
    }

    return (
        <button className="p-2 rounded-sm" onClick={handleToggleTheme}>
            { theme === AppConstatnts.DARK && <FaRegMoon className="text-lg"/>}
            { theme === AppConstatnts.LIGHT && <FaRegSun  className="text-lg" />}
        </button>
    );
}

export default ThemeSwitcher;