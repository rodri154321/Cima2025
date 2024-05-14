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
    console.log(exist);

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


module.exports = { allUsers, findUserEmail, findUsername}
