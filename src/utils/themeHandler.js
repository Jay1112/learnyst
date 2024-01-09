import {AppConstatnts} from '../constants/constants';

export function toggleTheme(){
    const theme = getCurrentTheme();
    if(theme){
        if(theme === AppConstatnts.DARK){
            setTheme(AppConstatnts.LIGHT);
        }else if(theme === AppConstatnts.LIGHT){
            setTheme(AppConstatnts.DARK);
        }
    }
}

export function getCurrentTheme(){
    const theme = localStorage.getItem(AppConstatnts.THEME_KEY);
    if(theme){
        return theme;
    }
    return '';
}

export function setTheme(theme){
    const htmlTag = document.getElementsByTagName("html")[0];
    if(theme === AppConstatnts.DARK){
        localStorage.setItem(AppConstatnts.THEME_KEY,theme);
        htmlTag.setAttribute('data-theme',theme);
    }
    else if(theme === AppConstatnts.LIGHT){
        localStorage.setItem(AppConstatnts.THEME_KEY,theme);
        htmlTag.setAttribute('data-theme',theme);
    }
    else{
        localStorage.setItem(AppConstatnts.THEME_KEY,AppConstatnts.DARK);
        htmlTag.setAttribute('data-theme',AppConstatnts.DARK);
    }
}

export function handleTheme(){
    const theme = getCurrentTheme();
    setTheme(theme);
}