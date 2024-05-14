const { Router } = require("express");
const router = Router();

const loginRoutes = require('./loginRoutes');
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const pagoRoutes = require("./pagoRoutes");

router.use("/login", loginRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);
router.use("/pago", pagoRoutes);

module.exports = router;