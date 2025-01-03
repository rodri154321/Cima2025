//  const baseURL="http://localhost:3001/login/login"
const baseURL = "https://cima2025.up.railway.app/login/login"
const login = async (credentials,pictureGoogle) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if(response.ok){
            const data = await response.json();
            localStorage.setItem('pictureGoogle', JSON.stringify(pictureGoogle))
            localStorage.setItem('user', JSON.stringify(data.user));
            return data; // Retorna los datos devueltos por el servidor
        }
        
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw new Error('Hubo un error en la solicitud',error);
    }
};

export default { login };