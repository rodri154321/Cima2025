import React from 'react';

import imae from "../pdfs/DEVOCIONALES.webp";
import imae1 from "../pdfs/GRUPOSPEQUEÑOS.webp";



const DevoGrup = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="Experimenta" />
            <img style={{ width: "100%"}} src={imae1} alt="Experimenta" />
        </div>
    );
};

export default DevoGrup;