const { admins } = require('../db')

const registerAdmin = async (email, password) => {

    const exist = await admins.findOne({ where: { email: email } });

    if (exist == null) return newAdmin = await admins.create({ email, password })
    else throw Error("Admin ya existente")

}

const loginAdmin = async (email, password) => {

    console.log(email, password);

    const exist = await admins.findOne({ where: { email: email } });

    if (!exist) throw Error("Usuario no encontrado")

    if (exist.password !== password) throw Error("Contraseña Invalida")

    return exist;
}

module.exports = { registerAdmin, loginAdmin }