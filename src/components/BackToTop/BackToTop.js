// import React from "react";
// import { useState, useEffect } from "react";
// import './BackToTop.scss';


// // ------------ MATERIAL UI -------------
// import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

// const BackToTop = () => {

//     const [scrollTop, setScrollTop] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 340) {
//         setScrollTop(true);
//       } else {
//         setScrollTop(false);
//       }
//     });
//   }, []);
//   const bottomToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//     return (
                   
//         <main class="container">
//           <button class="chevron-down backToTop" onClick={bottomToTop} >
//             <svg class="material-icons"> <ExpandLessRoundedIcon />
//             </svg>
//             <span> back to top</span>
//           </button>
//         </main>
//     )
// }
// export default BackToTop;
