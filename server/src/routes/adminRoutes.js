const { Router } = require("express");
const adminRoutes = Router();
const { registerAdminHandler, loginAdminHandler, getAdminEmail } = require("../handlers/adminHandler");

adminRoutes.post("/registerAdmin", registerAdminHandler)
adminRoutes.get("/loginAdmin", loginAdminHandler)
adminRoutes.get("/getAdminEmail", getAdminEmail)

module.exports = adminRoutes;