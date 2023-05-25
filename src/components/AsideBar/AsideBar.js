import './_asideBar.scss';


// ------------ MATERIAL UI -------------
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Brightness4Icon from '@mui/icons-material/Brightness4';

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
  
  // if its not currently enabled, enable it
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
        <a href="https://github.com/lanaball" className="header__social" target="_blank" rel="noreferrer">
          <svg width="30" height="30" aria-labelledby="socialGitHub" role="img"> <GitHubIcon />
            <title id="socialGitHub">GitHub</title>
          </svg>
        </a>


        <a href="https://www.linkedin.com/in/allana-kennedy-ab86b021a/" className="header__social" target="_blank" rel="noreferrer">
          <svg width="30" height="30" aria-labelledby="socialLinkedIn" role="img"> <LinkedInIcon />
            <title id="socialLinkedIn">LinkedIn</title>
          </svg>
        </a>


        <a href="mailto:allana.m.kennedy@gmail.com" className="header__social" target="_blank" rel="noreferrer">
          <svg width="30" height="30" aria-labelledby="Email" role="img"> <EmailIcon />
            <title id="email"> Email </title>
          </svg>
        </a>


        <button onClick={toggleTheme} id="dark-mode-toggle" className="dark-mode-toggle header__social">
          <svg width="100%" height="20" aria-labelledby="darkModeView" role="img" viewBox="0 0 496 496"> <DarkModeIcon /> 
             <title id="darkmode">DarkMode</title>
          </svg>
        </button>
      </div>
    )
}
export default AsideBar;