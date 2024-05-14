const username = "estebann" 
const searchCountryId = async (countryName) => {
    try {
      const response = await fetch(`https://api.geonames.org/searchJSON?q=${countryName}&maxRows=1&username=${username}`);
      const data = await response.json();
      return data.geonames[0].countryId; // Devuelve el primer resultado encontrado
    } catch (error) {
      console.error('Error al buscar el país:', error);
      return null;
    }
  };

  export default searchCountryId