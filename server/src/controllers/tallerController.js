const { talleres, users } = require('../db')

const newTaller = async (nombreTaller, cupo) =>{

    const exist = await talleres.findOne({ where: { nombreTaller: nombreTaller } });

  if (exist == null) return nuevo = await talleres.create({ nombreTaller, cupo })
  else throw Error("Taller ya existente")

};

const allTalleres = async () =>{

    const alltalleresDb = await talleres.findAll()
    if (alltalleresDb.length > 0) {
        return alltalleresDb;
        
    }
    else {
        throw Error(`No se encontraron talleres`);
    }

};

const addCupo = async (id, cupos) =>{
    try {
        const exist = await talleres.findOne({ where: { id: id } });
        if (!exist) {
          // No se encontró ningún usuario con el correo electrónico dado
          throw Error('Ocurrio un error intente mas tarde');
        }
          await talleres.update({
            cupo: cupos
          },
            {
              where: {
                id: exist.dataValues.id,
              },
            },
          );
          return 'cupo actualizado';
        
      } catch (error) {
        throw Error('Error al modificar cupo:', error);
      }
};

const deleteTaller = async (id) =>{
    let idTaller = await talleres.findByPk(id)

    if (idTaller) {
        talleres.destroy({
            where: { id: id }
        })
        return idTaller.nombreTaller
    }

    return 'Taller inexistente'
};

const tallerusuario = async (idUser, idTaller) =>{
  try {
    const taller = await talleres.findByPk(idTaller);
    const usuario = await users.findByPk(idUser);

    if (!taller || !usuario) {
        throw new Error('Taller o usuario no encontrado');
    }

    usuario.tallerId = taller.id;
    await usuario.save();

    console.log('Usuario asociado al taller correctamente');

    return (usuario.nombre + " agregado a taller " + taller.nombreTaller)
} catch (error) {
    console.error('Error al asociar usuario al taller:', error.message);
    throw new Error('Error al asociar usuario al taller:', error.message);
}
    
};

const eliminarTallerUser = async (idUser) =>{

  try {
  // const taller = await talleres.findByPk(idTaller);
    const usuario = await users.findByPk(idUser);

    if (!usuario) {
        throw new Error('Taller o usuario no encontrado');
    }

    usuario.tallerId = null;
    await usuario.save();

    console.log('usuario eliminado del taller');

    return ('usuario eliminado del taller')

  } catch (error) {
    console.error('Error al elimina usuario del taller:', error.message);
    throw new Error('Error al elimina usuario del taller:', error.message);
}

}

module.exports = {
    newTaller,
    allTalleres,
    addCupo,
    deleteTaller,
    tallerusuario,
    eliminarTallerUser
}