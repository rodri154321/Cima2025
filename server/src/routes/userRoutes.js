const { Router } = require("express");
const userRoutes = Router();
const { getUserEmailHandler, getUsernameHandler, getAllUsersHandler, getUserPaisHandler } = require("../handlers/usersHandler");

userRoutes.get("/getUserEmail", getUserEmailHandler)
userRoutes.get("/getUsername", getUsernameHandler)
userRoutes.get("/getUserPais", getUserPaisHandler)
userRoutes.get("/getAllUser", getAllUsersHandler)

module.exports = userRoutes;