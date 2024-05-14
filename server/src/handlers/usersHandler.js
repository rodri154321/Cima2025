const { allUsers, findUserEmail, findUsername } = require('../controllers/userController')

const getAllUsersHandler = async (req, res) => {
    try {
        const results = await allUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUserEmailHandler = async (req, res) => {
    const { emailGoogle } = req.method === 'GET' ? req.body : req.body;
    try {
        const isAuthenticated = await findUserEmail(emailGoogle);
        if (isAuthenticated) {
            res.status(200).json(isAuthenticated);
        } 
    } catch (error) {
        res.status(401).json({ authenticated: false, error: error.message });
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

module.exports = {
    getAllUsersHandler,
    getUserEmailHandler,
    getUsernameHandler
}