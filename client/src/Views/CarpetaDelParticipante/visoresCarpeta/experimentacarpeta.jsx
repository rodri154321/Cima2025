import React from 'react';

import imae from "../pdfs/EXPERIMENTA1.webp";
import imae1 from "../pdfs/EXPERIMENTA2.webp";
import imae2 from "../pdfs/EXPERIMENTA3.webp";


const ExperimentaCarpeta = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="Experimenta" />
            <img style={{ width: "100%"}} src={imae1} alt="Experimenta" />
            <img style={{ width: "100%"}} src={imae2} alt="Experimenta" />
        </div>
    );
};

export default ExperimentaCarpeta;