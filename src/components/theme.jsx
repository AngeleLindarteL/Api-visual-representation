import React from "react";


const ThemeChange = (props) => {
   
    let body = document.querySelector('body');

    const readTheme = () => {
        let theme = window.localStorage.getItem('theme');
        if(theme === null){
            localStorage['theme'] = "light";
        }else{
            body.className = theme;
        }
    }
    readTheme()

    const change = () => {
        if (body.className === 'light'){
            body.className = 'dark'
            if(window.localStorage.getItem('theme') === null){
                localStorage['theme'] = 'dark'
            } 
            else if (window.localStorage.getItem('theme') === "light"){
                window.localStorage.removeItem('theme')
                localStorage['theme'] = 'dark'
            };
        }else{
            body.className = 'light'
            if(window.localStorage.getItem('theme') === null){
                localStorage['theme'] = 'light'
            } 
            else if(window.localStorage.getItem('theme') === 'dark'){
                window.localStorage.removeItem('theme')
                localStorage['theme'] = 'light'
            };
        }
    }

    return(
        <button onClick={change} className="btn"> 
            <p>Cambiar Tema</p>
            <div
                id="theme-logo"
                alt="Change Theme Button"
            ></div>
        </button>
    ) 
}

export default ThemeChange