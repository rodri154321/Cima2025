const { users } = require("../db.js");

const postLogin = async (emailGoogle, password) => {

  const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });

  if (!exist) throw Error("Usuario no encontrado")

  if (exist.password !== password) throw Error("Contraseña Invalida")

  return exist;
}

const postRegisterUser = async (emailGoogle, password) => {

  const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });

  if (exist == null) return newUser = await users.create({ emailGoogle, password, preinscripto: false })
  else throw Error("Usuario ya existente")


}

const addInfoUser = async (nombre, apellido, emailGoogle, email, fechaNacimiento, documento,
  sexo, nacionalidad, paisResidencia, provincia, ciudad, iglesia, pastor, telefonoPastor,
  esAlergico, detalleAlergia, tieneMedicacion, detalleMedicacion, telefono, telefonoEmergencia,
  nombreEmergencia, esDiabetico, esCeliaco, esVegetariano, detalleAlimentacion, participoCimaday,
  participoPrisma, participoEurovoluntariado, participoCima, participoSigue, ocupacion, areaMinisterio) => {
    
  try {
    const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });
    if (!exist) {
      // No se encontró ningún usuario con el correo electrónico dado
      throw Error('Ocurrio un error intente mas tarde');
    }
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
        participoSigue: participoSigue,
        ocupacion, 
        areaMinisterio,
        fechaAlta: new Date()
      },
        {
          where: {
            id: exist.dataValues.id,
          },
        },
      );
      return 'Usuario actualizado correctamente';
    }
    else throw Error('Ocurrio un error intente mas tarde');
    
  } catch (error) {
    throw Error('Error al actualizar el usuario:', error);
  }
  }

  const addExperimenta = async (emailGoogle,experimenta,otroExperimenta,añoOtroExperimenta) => {
      
    try {
      const exist = await users.findOne({ where: { emailGoogle: emailGoogle } });
      if (!exist) {
        // No se encontró ningún usuario con el correo electrónico dado
        throw Error('Ocurrio un error intente mas tarde');
      }
        await users.update({
          experimenta: experimenta,
          otroExperimenta: otroExperimenta,
          añoOtroExperimenta: añoOtroExperimenta,
          altaExperimenta:new Date()
        },
          {
            where: {
              id: exist.dataValues.id,
            },
          },
        );
        return 'Preinscripto en experimenta!!';
      
    } catch (error) {
      throw Error('Error al agregar experimenta:', error);
    }
    }

    const updateMonto = async ( id, montoPagado) => {
      
      try {
        const exist = await users.findOne({ where: { id: id } });
        if (!exist) {
          // No se encontró ningún usuario con el correo electrónico dado
          throw Error('Ocurrio un error intente mas tarde');
        }
          await users.update({
            montoPagado: montoPagado
          },
            {
              where: {
                id: exist.dataValues.id,
              },
            },
          );
          return 'monto actualizado';
        
      } catch (error) {
        throw Error('Error al modificar monto:', error);
      }
      }

module.exports = {
    postLogin, addInfoUser, postRegisterUser,addExperimenta,updateMonto
  }


