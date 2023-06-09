// ------- IMPORT ----------
import React from "react";

// ----- STYLE ------
import './_BackToTop.scss';

// ------------ MATERIAL UI -------------
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';


const BackToTop = () => {

    return (

        <main className="container">
            <a href="/Top" className="material-icons chevron-up">
                <NorthOutlinedIcon />
            </a>
        </main>
    )
}
export default BackToTop;
