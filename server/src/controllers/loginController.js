const { users } = require("../db.js");

const postLogin = async (emailGoogle, password) => {

    console.log(emailGoogle, password);

    const exist = await users.findOne({ where: { emailGoogle: email } });

    if (!exist) throw Error("Usuario no encontrado")

    if (exist.password !== password) throw Error("Contraseña Invalida")

    if (exist.active !== true) throw Error("Usuario Desactivado")

    return exist;
}

const postRegisterUser = async (emailGoogle, password) => {

    console.log(emailGoogle, password);

    const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });
    const newUser = null
    if (!exist) newUser = await users.create(emailGoogle, password, preinscripto=false)
    else throw Error('usuario ya existente')
    return newUser;
}

const addInfoUser = async ( emailGoogle, nombre, apellido, telefono, documento, sexo, nacionalidad, ciudad, provincia, email, fechaNacimiento, estadoInscripcion, preinscripto, cartaPastoral, descubrePagos, experimentaPagos, esVoluntario, tieneMedicacion, detalleMedicacion, esAlergico, detalleAlergia, iglesia, nombrePastor, paisResidencia) => {
    const newUser = null
    const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });
    if(!exist.preinscripto){
        newUser = await users.update({ nombre, apellido, telefono, documento, sexo, nacionalidad, ciudad, provincia, email, fechaNacimiento, estadoInscripcion, preinscripto, tieneMedicacion, detalleMedicacion, esAlergico, detalleAlergia, iglesia, nombrePastor, telefonoPastor, paisResidencia })
        
        await users.update(
            { nombre: nombre },
            { apellido: apellido },
            { telefono: telefono },
            { documento: documento },
            { sexo: sexo },
            { nacionalidad: nacionalidad },
            { ciudad: ciudad },
            { provincia: provincia },
            { email: email },
            { fechaNacimiento: fechaNacimiento },
            { estadoInscripcion: estadoInscripcion },
            { preinscripto: true },
            { cartaPastoral: null },
            { descubrePagos: null },
            { experimentaPagos: null },
            { descubrePagos: null },
            { esVoluntario: false },
            { tieneMedicacion: tieneMedicacion },
            { detalleMedicacion: detalleMedicacion },
            { esAlergico: esAlergico },
            { detalleAlergia: detalleAlergia },
            { iglesia: iglesia },
            { nombrePastor: nombrePastor },
            { telefonoPastor: telefonoPastor },
            { paisResidencia: paisResidencia },
            {
              where: {
                id:  exist.id,
              },
            },
          );
    }
    return newUser
}

module.exports = {
    postLogin, addInfoUser, postRegisterUser
}