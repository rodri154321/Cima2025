const username = "estebann"

const getApiProvinces = async (countryGeonameId) => {
    try {
      const response = await fetch(`https://api.geonames.org/childrenJSON?geonameId=${countryGeonameId}&lang=es&username=${username}`);
      const data = await response.json();
      return data.geonames; 
    } catch (error) {
      console.error('Error al obtener las subdivisiones administrativas:', error);
      return [];
    }
  };

export default getApiProvinces