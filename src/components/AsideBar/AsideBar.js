import './AsideBar.scss';
import React, { useState } from 'react';

const AsideBar = () => {

  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {

  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light')
  //   }

  // }

  const toggleTheme = () => {
    // console.log('i have been clicked')
  // check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkMode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkMode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
   }

    return (
         <div className="social__link">
        <a href="https://github.com/lanaball" className="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-labelledby="socialGitHub" role="img">
            <title id="socialGitHub">GitHub</title>
            <path fill="currentColor" fillRule="evenodd"
              d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/allana-kennedy-ab86b021a/" className="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-labelledby="socialLinkedIn" role="img">
            <title id="socialLinkedIn">LinkedIn</title>
            <path fill="currentColor" fillRule="evenodd"
              d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" />
          </svg>
        </a>
        <a href="mailto:allana.m.kennedy@gmail.com" className="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-labelledby="Email" role="img">
            <title id="email">Email</title>
            <path fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z">
            </path>
          </svg>
        </a>
        <button onClick={toggleTheme} id="dark-mode-toggle" className="dark-mode-toggle header__social">
          <svg width="100%" height="20" aria-labelledby="darkModeView" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
             <title id="email">DarkMode</title>
            <path fill="currentColor" fillRule="evenodd"
              d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
              transform="translate(-8 -8)" />
          </svg>
        </button>
      </div>
    )
}
export default AsideBar;