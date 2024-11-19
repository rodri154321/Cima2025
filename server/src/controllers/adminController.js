const { admins, users } = require('../db')

const registerAdmin = async (email, password) => {

    const exist = await admins.findOne({ where: { email: email } });

    if (exist == null) return newAdmin = await admins.create({ email, password })
    else throw Error("Admin ya existente")

}

const loginAdmin = async (email, password) => {

    const exist = await admins.findOne({ where: { email: email } });

    if (!exist) throw Error("Admin no encontrado")

    if (exist.password !== password) throw Error("Contraseña Invalida")

    return exist;
}

const findAdminEmail = async (email) => {
    const exist = await admins.findOne({ where: { email: email } });

    if (exist) {
        return exist;
    }
    else {
        throw Error(`Admin no encontrado`);
    }
};

const cambiopractica = async (email, practica) => {

    try {
        const exist = await users.findOne({ where: { email: email } });
        if (!exist) {
            throw Error('no se encontro el email');
        }
        await users.update({
            experimenta: practica
        },
            {
                where: {
                    id: exist.dataValues.id,
                },
            },
        )
        return 'Practica actualizada correctamente';
        
    } catch (error) {
        throw Error('Error al actualizar la práctica:', error);
    }

}

module.exports = { registerAdmin, loginAdmin, findAdminEmail, cambiopractica }