import React from 'react';

import imae from "../pdfs/MOVIDA.webp";

const Movida = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="atencion" />
        </div>
    );
};

export default Movida;