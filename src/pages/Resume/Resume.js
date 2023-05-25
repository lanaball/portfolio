import React from 'react';
import resume from '../../assets/resume/AllanaKennedy.pdf'
import { Document, Page, } from 'react-pdf';


const Resume = () => {
    return (
        <div>
            <h1>Show Resume</h1>
            <Document file={resume}
                onLoadError={console.error}
                style={{ width: '100vw', height: 'auto' }} >
                <Page pageIndex={0} />
            </Document>

        </div>
    )
}

export default Resume;