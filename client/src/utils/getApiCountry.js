
const username = "estebann" 
const getApiCountry  = async () => {
  try {
    const response = await fetch(`https://secure.geonames.org/countryInfoJSON?lang=es&username=${username}`);
    if(response.ok){
      const data = await response.json();
  
      return data.geonames; // Devuelve la lista de todos los países
    }else{
      console.log("Error: no se obtuvo respuesta de api country")
    }
   
  } catch (error) {
    console.error('Error al obtener todos los países:', error);
    return [];
  }
};

export default getApiCountry

