const baseURL="https://cima2025.up.railway.app/login/register"
// const baseURL="http://localhost:3001/login/register"
const register = async (credentials,picture) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        // Object.values(data);
        localStorage.setItem('pictureGoogle', JSON.stringify(picture))
        localStorage.setItem('user', JSON.stringify(data.user))
        return data; // Retorna los datos devueltos por el servidor
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw new Error('Hubo un error en la solicitud',error);
    }
};

export default { register };