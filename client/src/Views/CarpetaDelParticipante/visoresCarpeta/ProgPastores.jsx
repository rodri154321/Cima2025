import React from 'react';

import imae from "../pdfs/PROGRAMAPASTORES1.webp";
import imae1 from "../pdfs/PROGRAMAPASTORES2.webp";
import imae2 from "../pdfs/PROGRAMAPASTORES3.webp";


const Progpastores = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="Experimenta" />
            <img style={{ width: "100%"}} src={imae1} alt="Experimenta" />
            <img style={{ width: "100%"}} src={imae2} alt="Experimenta" />
        </div>
    );
};

export default Progpastores;