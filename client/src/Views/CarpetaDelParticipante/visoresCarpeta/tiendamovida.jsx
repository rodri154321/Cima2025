import React from 'react';

import imae from "../pdfs/TIENDAMOVIDA.webp";

const TiendaMovida = () => {
    return (
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <img style={{ width: "100%"}} src={imae} alt="atencion" />
        </div>
    );
};

export default TiendaMovida;