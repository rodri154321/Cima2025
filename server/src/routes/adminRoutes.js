const { Router } = require("express");
const adminRoutes = Router();
const { registerAdminHandler, loginAdminHandler, getAdminEmailHandler } = require("../handlers/adminHandler");

adminRoutes.post("/registerAdmin", registerAdminHandler)
adminRoutes.get("/loginAdmin", loginAdminHandler)
adminRoutes.get("/getAdminEmail", getAdminEmailHandler)

module.exports = adminRoutes;