import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { AppConstatnts } from "../../constants/constants";
import useTheme from "../../hooks/useTheme";

function ThemeSwitcher(){
    const { toggleTheme, currentTheme } = useTheme();

    function handleToggleTheme(){
        toggleTheme();
    }

    return (
        <button className="p-2 rounded-sm" onClick={handleToggleTheme}>
            { currentTheme === AppConstatnts.DARK && <FaRegMoon className="text-lg"/>}
            { currentTheme === AppConstatnts.LIGHT && <FaRegSun  className="text-lg" />}
        </button>
    );
}

export default ThemeSwitcher;