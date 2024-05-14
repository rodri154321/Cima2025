const { Router } = require("express");
const adminRoutes = Router();
const { registerAdminHandler, loginAdminHandler } = require("../handlers/adminHandler");

adminRoutes.post("/registerAdmin", registerAdminHandler)
adminRoutes.get("/loginAdmin", loginAdminHandler)

module.exports = adminRoutes;