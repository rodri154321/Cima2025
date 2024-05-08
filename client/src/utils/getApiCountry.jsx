import React from 'react'


const getApiCountry = async (value) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    // console.log(`${apiCountry}/name/${value}`)
    if (response.ok) {
      const data = await response.json();
      let dataArray = Object.values(data);
      return dataArray;
    } else {
      console.error("Error al obtener datos de la API:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return [];
  }
};

export default getApiCountry

// [{name:{common:"chile"}},
// {name:{common:"colombia"}},
// {name:{common:"peru"}},
// {name:{common:"argentina"}}
// ]