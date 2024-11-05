const { registerAdmin, loginAdmin, findAdminEmail } = require('../controllers/adminController')

const registerAdminHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await registerAdmin(email, password);
    if (response) return res.status(200).json({ message: "Registro exitoso", admin: response, homeURL: "/" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginAdminHandler = async (req, res) => {
  const { email, password } = req.query;

  // Validación de entrada
  if (!email || !password) {
    return res.status(400).json({ message: "Email y contraseña son requeridos." });
  }

  try {
    const admin = await loginAdmin(email, password);
    
    return res.status(200).json({
      message: "Ingreso Exitoso",
      admin: {
        id: admin.id,
        email: admin.email
      },
      homeURL: "/"
    });

  } catch (error) {
    // Manejo de errores según el tipo de fallo
    if (error.message === "Credenciales inválidas") {
      return res.status(401).json({ message: "Email o contraseña incorrectos." });
    } else {
      console.error("Error en loginAdminHandler:", error);
      return res.status(500).json({ message: "Error en el servidor, intenta más tarde." });
    }
  }
};

const getAdminEmailHandler = async (req, res) => {
  const { email } = req.method === 'GET' ? req.body : req.body;
  try {
      const isAuthenticated = await findAdminEmail(email);
      if (isAuthenticated) {
          res.status(200).json(isAuthenticated);
      } 
  } catch (error) {
      res.status(401).json({ authenticated: false, error: error.message });
  }
};

module.exports = {
  registerAdminHandler,
  loginAdminHandler,
  getAdminEmailHandler
}