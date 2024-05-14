
const username = "estebann" 
const getApiCountry  = async () => {
  try {
    const response = await fetch(`http://api.geonames.org/countryInfoJSON?lang=es&username=${username}`);
    const data = await response.json();
  
    return data.geonames; // Devuelve la lista de todos los países
  } catch (error) {
    console.error('Error al obtener todos los países:', error);
    return [];
  }
};

export default getApiCountry

