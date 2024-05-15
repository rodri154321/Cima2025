const { users } = require('../db')

const allUsers = async () => {
    const allusersDb = await users.findAll()
    if (allusersDb.length > 0) {
        return allusersDb;
    }
    else {
        console.log(allusersDb);
        throw Error(`No se encontraron usuarios`);
    }
}

const findUserEmail = async (emailGoogle) => {
    const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });

    if (exist) {
        return exist;
    }
    else {
        throw Error(`Usuario no encontrado`);
    }
};

const findUsername = async (nombre) => {
    const exist = await users.findOne({ where: { nombre: nombre } });
    console.log(exist);

    if (exist) {
        return exist;
    }
    else {
        throw Error(`Usuario no encontrado`);
    }
};

const findUserPais = async (nacionalidad) => {
    const exist = await users.findAll({ where: { nacionalidad: nacionalidad } });

    if (exist) {
        return exist;
    }
    else {
        throw Error(`No hay usuarios de este pais`);
    }
};


module.exports = { allUsers, findUserEmail, findUsername, findUserPais}
