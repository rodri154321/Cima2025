const { where } = require('sequelize');
const { pagos, users } = require('../db')

const agregarPagos = async (montoPago, esDescubre, fechaPago, idUser) => {
    try {
        const newPago = await pagos.create({ montoPago, esDescubre, fechaPago });

        await newPago.setUser(idUser);

        const totalPagos = await pagos.sum('montoPago', { where: { idUsuario: idUser } });

        await users.update({ montoPagado: totalPagos }, { where: { id: idUser } })

        return newPago

    }
    catch (error) {
        throw Error('Error al agregar pago', error);
    }

}

const findPagos = async (id) => {

    const user = await users.findByPk(id, {
        include: [{
            model: pagos
        }]
    })

    if (!user) throw Error("Pago no encontrado")

    return user


};

module.exports = { agregarPagos, findPagos }