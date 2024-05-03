const { postLogin, addInfoUser, postRegisterUser} = require("../controllers/loginController");

const loginUser = async (req, res) => {
  const { emailGoogle, password } = req.body;
  try {
    const response = await postLogin(emailGoogle, password);
    if (response) return res.status(200).json({ message: "Ingreso Exitoso", user: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const registerUser = async (req,res) =>{

  const { emailGoogle, password } = req.body;
  try {
    const response = await postRegisterUser(emailGoogle, password);
    if (response) return res.status(200).json({ message: "Registro Exitoso", user: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};

const infoUser = async (req,res) =>{

  const {emailGoogle, nombre, apellido, telefono, documento, sexo, nacionalidad, ciudad, provincia, email, fechaNacimiento, estadoInscripcion, preinscripto, cartaPastoral, descubrePagos, experimentaPagos, esVoluntario, tieneMedicacion, detalleMedicacion, esAlergico, detalleAlergia, iglesia, nombrePastor, paisResidencia } = req.body;
  try {
    const response = await addInfoUser(emailGoogle, nombre, apellido, telefono, documento, sexo, nacionalidad, ciudad, provincia, email, fechaNacimiento, estadoInscripcion, preinscripto, cartaPastoral, descubrePagos, experimentaPagos, esVoluntario, tieneMedicacion, detalleMedicacion, esAlergico, detalleAlergia, iglesia, nombrePastor, paisResidencia);
    if (response) return res.status(200).json({ message: "Actualizacion Exitosa", user: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};


module.exports = {
  loginUser,registerUser,infoUser
}