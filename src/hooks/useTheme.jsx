import { useEffect, useState } from "react";
import { AppConstatnts } from "../constants/constants";
import { useDispatch } from "react-redux";
import { AppActions } from '../redux/constants/AppReducerConstants';

function useTheme(){
    const dispatch = useDispatch();
    const [currentTheme,setCurrentTheme] = useState(AppConstatnts.DARK);

    useEffect(()=>{
       initialTheme();
    },[]);

    function initialTheme(){
        const themeValue = localStorage.getItem(AppConstatnts.THEME_KEY);
        setTheme(themeValue);
    }

    function toggleTheme(){
        const theme = getCurrentTheme();
        if(theme){
            if(theme === AppConstatnts.DARK){
                setTheme(AppConstatnts.LIGHT);
            }else if(theme === AppConstatnts.LIGHT){
                setTheme(AppConstatnts.DARK);
            }
        }
    }

    function getCurrentTheme(){
        return currentTheme;
    }

    function setTheme(theme){
        const htmlTag = document.getElementsByTagName("html")[0];
        if(theme === AppConstatnts.DARK){
            localStorage.setItem(AppConstatnts.THEME_KEY,theme);
            htmlTag.setAttribute('data-theme',theme);
            setCurrentTheme(theme);
            dispatch( { type : AppActions.SET_APP_THEME, payload : theme } );
        }
        else if(theme === AppConstatnts.LIGHT){
            localStorage.setItem(AppConstatnts.THEME_KEY,theme);
            htmlTag.setAttribute('data-theme',theme);
            setCurrentTheme(theme);
            dispatch( { type : AppActions.SET_APP_THEME, payload : theme } );
        }
        else{
            localStorage.setItem(AppConstatnts.THEME_KEY,AppConstatnts.DARK);
            htmlTag.setAttribute('data-theme',AppConstatnts.DARK);
            setCurrentTheme(AppConstatnts.DARK);
            dispatch( { type : AppActions.SET_APP_THEME, payload : AppConstatnts.DARK } );
        }
    }

    return {
        initialTheme,
        getCurrentTheme,
        setTheme,
        toggleTheme,
        currentTheme
    }
}

export default useTheme;