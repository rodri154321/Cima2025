const { admins, users } = require('../db');

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

        const user = await users.findOne({ where: { emailGoogle: email } });
        if (!user) {
            throw new Error('No se encontró un usuario con el email proporcionado.');
        }

        await users.update(
            { experimenta: practica },
            { where: { id: user.id } }
        );

        return `La práctica se actualizó correctamente para el usuario con email: ${email}.`;
    } catch (error) {

        throw new Error(`Error al actualizar la práctica: ${error.message}`);
    }
};

module.exports = { registerAdmin, loginAdmin, findAdminEmail, cambiopractica }