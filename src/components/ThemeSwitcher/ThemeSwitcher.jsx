import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { AppConstatnts } from "../../constants/constants";
import useTheme from "../../hooks/useTheme";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ThemeSwitcher(){
    const { toggleTheme } = useTheme();
    const app = useSelector((state)=>state.app);

    function handleToggleTheme(){
        toggleTheme();
    }

    return (
        <button className="p-2.5 rounded-sm" onClick={handleToggleTheme}>
            { app.theme === AppConstatnts.DARK && <FaRegMoon className="text-lg"/>}
            { app.theme === AppConstatnts.LIGHT && <FaRegSun  className="text-lg" />}
        </button>
    );
}

export default ThemeSwitcher;