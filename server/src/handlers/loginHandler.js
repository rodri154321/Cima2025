const { postLogin, addInfoUser, postRegisterUser, addExperimenta, updateMonto} = require("../controllers/loginController");

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

  //{firstname,lastName,dateOfBirth,gender, document, nationality, countryOfResidence, province, city, church, pastor, pastorPhoneNumber, allergies, allergyDetails, medication, medicationDetails, whatsappNumber, email, emergencyContactName, emergencyContactPhoneNumber, participacionMovida }
  const {nombre,apellido,emailGoogle,email,fechaNacimiento,documento,sexo,nacionalidad,paisResidencia,provincia,ciudad,iglesia,pastor,telefonoPastor,esAlergico,detalleAlergia,tieneMedicacion,detalleMedicacion,telefono,telefonoEmergencia,nombreEmergencia,esDiabetico,esCeliaco,esVegetariano,detalleAlimentacion,participoCimaday,participoPrisma,participoEurovoluntariado,participoCima,participoSigue, ocupacion, areaMinisterio} = req.body;
  try {
    const response = await addInfoUser(nombre,apellido,emailGoogle,email,fechaNacimiento,documento,sexo,nacionalidad,paisResidencia,provincia,ciudad,iglesia,pastor,telefonoPastor,esAlergico,detalleAlergia,tieneMedicacion,detalleMedicacion,telefono,telefonoEmergencia,nombreEmergencia,esDiabetico,esCeliaco,esVegetariano,detalleAlimentacion,participoCimaday,participoPrisma,participoEurovoluntariado,participoCima,participoSigue, ocupacion, areaMinisterio);
    if (response) return res.status(200).json({ message: "Actualizacion Exitosa", user: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};

const experimentaUser = async (req,res) =>{

  const {emailGoogle,experimenta,otroExperimenta,añoOtroExperimenta}= req.body;

  try {
    const response = await addExperimenta(emailGoogle,experimenta,otroExperimenta,añoOtroExperimenta);
    if (response) return res.status(200).json({ message: "Actualizacion Exitosa", user: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const montoUser = async (req,res) =>{

  const {id, montoPagado}= req.body;

  try {
    const response = await updateMonto(id,montoPagado);
    if (response) return res.status(200).json({ message: "Actualizacion Exitosa", user: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {
  loginUser,registerUser,infoUser,experimentaUser,montoUser
}