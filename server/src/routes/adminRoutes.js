const { Router } = require("express");
const adminRoutes = Router();
const { registerAdminHandler, loginAdminHandler, getAdminEmailHandler, changeExperimentaHandler } = require("../handlers/adminHandler");

adminRoutes.post("/registerAdmin", registerAdminHandler)
adminRoutes.get("/loginAdmin", loginAdminHandler)
adminRoutes.get("/getAdminEmail", getAdminEmailHandler)
adminRoutes.put("/cambiarExpeimenta", changeExperimentaHandler)

module.exports = adminRoutes;