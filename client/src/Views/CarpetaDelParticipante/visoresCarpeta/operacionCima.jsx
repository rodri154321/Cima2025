import React from 'react';

import imae from "../pdfs/OPCIMA.webp";

const OperacionCima = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="atencion" />
        </div>
    );
};

export default OperacionCima;