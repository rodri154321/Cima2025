const { Router } = require("express");
const router = Router();


const loginRoutes = require('./loginRoutes')



router.use("/login", loginRoutes);
// routes.js







module.exports = router;

//Buscar por Id y por nombre los users. eso
