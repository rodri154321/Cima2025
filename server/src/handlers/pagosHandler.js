const { agregarPagos, findPagos } = require('../controllers/pagoController')

const agregarPagosHandler = async (req, res) => {
    const { montoPago, esDescubre, fechaPago, idUser } = req.body;
    try {
        const response = await agregarPagos(montoPago, esDescubre, fechaPago, idUser);
        if (response) return res.status(200).json({ message: "Pago registrado con éxito", pago: response, homeURL: "/" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getPagosHandler = async (req, res) => {
    const { id } = req.method === 'GET' ? req.body : req.body;
    try {
        const isAuthenticated = await findPagos(id);
        if (isAuthenticated) {
            res.status(200).json(isAuthenticated);
        } 
    } catch (error) {
        res.status(401).json({ authenticated: false, error: error.message });
    }
};

module.exports = {
    agregarPagosHandler,
    getPagosHandler
}