const { users } = require("../db.js");

const postLogin = async(emailGoogle, password) =>{

      console.log(emailGoogle,password);

      const exist = await users.findOne({ where: { emailGoogle: email } });
      
      if (!exist) throw Error("Usuario no encontrado")
  
      if (exist.password !== password) throw Error("Contraseña Invalida")

      if (exist.active !== true) throw Error("Usuario Desactivado")

      return exist;
}

module.exports = {
    postLogin
}