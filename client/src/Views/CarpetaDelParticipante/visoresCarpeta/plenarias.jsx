import React from 'react';

import imae from "../pdfs/PLENARIAS1.webp";
import imae1 from "../pdfs/PLENARIAS2.webp";
import imae2 from "../pdfs/PLENARIAS3.webp";


const Plenarias = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="Plenarias" />
            <img style={{ width: "100%"}} src={imae1} alt="Plenarias" />
            <img style={{ width: "100%"}} src={imae2} alt="Plenarias" />
        </div>
    );
};

export default Plenarias;