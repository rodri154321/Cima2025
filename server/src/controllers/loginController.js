const { users } = require("../db.js");

const postLogin = async (emailGoogle, password) => {

  console.log(emailGoogle, password);

  const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });

  if (!exist) throw Error("Usuario no encontrado")

  if (exist.password !== password) throw Error("Contraseña Invalida")

  return exist;
}

const postRegisterUser = async (emailGoogle, password) => {

  const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });

  if (exist == null) return newUser = await users.create({ emailGoogle, password, preinscripto: false })
  else throw Error("usuario ya existente")


}

const addInfoUser = async (nombre, apellido, emailGoogle, email, fechaNacimiento, documento,
  sexo, nacionalidad, paisResidencia, provincia, ciudad, iglesia, pastor, telefonoPastor,
  esAlergico, detalleAlergia, tieneMedicacion, detalleMedicacion, telefono, telefonoEmergencia,
  nombreEmergencia, esDiabetico, esCeliaco, esVegetariano, detalleAlimentacion, participoCimaday,
  participoPrisma, participoEurovoluntariado, participoCima, participoSigue) => {

  try {
    const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });
    console.log(exist);
    if (!exist.dataValues.preinscripto) {
      await users.update({
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        sexo: sexo,
        documento: documento,
        nacionalidad: nacionalidad,
        paisResidencia: paisResidencia,
        provincia: provincia,
        ciudad: ciudad,
        iglesia: iglesia,
        nombrePastor: pastor,
        telefonoPastor: telefonoPastor,
        esAlergico: esAlergico,
        detalleAlergia: detalleAlergia,
        tieneMedicacion: tieneMedicacion,
        detalleMedicacion: detalleMedicacion,
        telefono: telefono,
        email: email,
        nombreEmergencia: nombreEmergencia,
        telefonoEmergencia: telefonoEmergencia,
        preinscripto: true,
        esDiabetico: esDiabetico,
        esCeliaco: esCeliaco,
        esVegetariano: esVegetariano,
        detalleAlimentacion: detalleAlimentacion,
        participoCimaday: participoCimaday,
        participoPrisma: participoPrisma,
        participoEurovoluntariado: participoEurovoluntariado,
        participoCima: participoCima,
        participoSigue: participoSigue
      },
        {
          where: {
            id: exist.dataValues.id,
          },
        },
      );
    }
    return 'Usuario actualizado correctamente';
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    return 'Hubo un error al actualizar el usuario';
  }
  }

module.exports = {
    postLogin, addInfoUser, postRegisterUser
  }


