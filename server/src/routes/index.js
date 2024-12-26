const { Router } = require("express");
const router = Router();

const loginRoutes = require('./loginRoutes');
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const pagoRoutes = require("./pagoRoutes");
const tallerRoutes = require("./tallerRoutes");

router.use("/login", loginRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);
router.use("/pago", pagoRoutes);
router.use("/taller", tallerRoutes);

module.exports = router;