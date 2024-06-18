const { allUsers, findUserEmail, findUsername, findUserPais, deleteUserId } = require('../controllers/userController')

const getAllUsersHandler = async (req, res) => {
    try {
        const results = await allUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUserEmailHandler = async (req, res) => {
    try {
        const emailGoogle = req.query.emailGoogle;
        
        if (!emailGoogle) {
            return res.status(400).json({ error: 'Falta el parámetro emailGoogle' });
        }
        const isAuthenticated = await findUserEmail(emailGoogle);
        if (isAuthenticated) {
            res.status(200).json(isAuthenticated);
        } 
    } catch (error) {
        res.status(404).json({ authenticated: false, error: error.message });
    }
};

const getUsernameHandler = async (req, res) => {
    const { nombre } = req.method === 'GET' ? req.body : req.body;
    try {
        const isAuthenticated = await findUsername(nombre);
        if (isAuthenticated) {
            res.status(200).json(isAuthenticated);
        } 
    } catch (error) {
        res.status(401).json({ authenticated: false, error: error.message });
    }
};

const getUserPaisHandler = async (req, res) => {
    const { nacionalidad } = req.method === 'GET' ? req.body : req.body;
    try {
        const isAuthenticated = await findUserPais(nacionalidad);
        if (isAuthenticated) {
            res.status(200).json(isAuthenticated);
        } 
    } catch (error) {
        res.status(401).json({ authenticated: false, error: error.message });
    }
};


const deleteUserHandler = async (req, res) => {
    const { id } = req.body
    try {
        const usersDelete = await deleteUserId(id);
        res.status(200).json(usersDelete)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

module.exports = {
    getAllUsersHandler,
    getUserEmailHandler,
    getUsernameHandler,
    getUserPaisHandler,
    deleteUserHandler
}