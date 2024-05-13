const { Router } = require("express");
const router = Router();

const loginRoutes = require('./loginRoutes');
const userRoutes = require("./userRoutes");

router.use("/login", loginRoutes);
router.use("/user", userRoutes);
// routes.js

module.exports = router;

//Buscar por Id y por nombre los users. eso
