const { addCupo, allTalleres, newTaller, deleteTaller, tallerusuario, eliminarTallerUser } = require('../controllers/tallerController')

const agregarTallerHandler = async (req, res) =>{
    const { nombreTaller, cupo } = req.body;
    try {
        const results = await newTaller(nombreTaller,cupo)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const getTalleresHandler = async (req, res) => {
    try {
        const results = await allTalleres()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const agregarCupoHandler = async (req, res) => {
    const { id , cupos } = req.body;
    try {
        const response = await addCupo(id , cupos);
        if (response) return res.status(200).json({ message: "Cupo Agregado" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const borrarTallerHandler = async (req, res) =>{
    const {id} =req.body;
try {
    
    const response = await deleteTaller(id);
    if (response) return res.status(200).json({ message: "taller " + response });

} catch (error) {
    return res.status(500).json({ error: error.message });
}
}

const tallerUserHandler = async (req, res) =>{
    const {idUser, idTaller} =req.body;
    try {
        const response = await tallerusuario(idUser , idTaller);
        if (response) return res.status(200).json({ message: response });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deletallerUserHandler = async (req, res) =>{
    const {idUser} =req.body;
    try {
        const response = await eliminarTallerUser(idUser);
        if (response) return res.status(200).json({ message: response });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    agregarCupoHandler,
    getTalleresHandler,
    agregarTallerHandler,
    borrarTallerHandler,
    tallerUserHandler,
    deletallerUserHandler
}