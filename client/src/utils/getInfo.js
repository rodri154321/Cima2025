const baseURL = "https://cima2025.up.railway.app/user/getUserEmail"
//const baseURL = "http://localhost:3000/user/getUserEmail"

const infoAct = async (emailGoogle) => {
    try {
        const url = `${baseURL}?emailGoogle=${encodeURIComponent(emailGoogle)}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok){
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            return data; // Retorna los datos devueltos por el servidor
        }
        
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw new Error('Hubo un error en la solicitud',error);
    }
};

export default { infoAct };