const { Router } = require("express");
const userRoutes = Router();
const { getUserEmailHandler, getUsernameHandler, getAllUsersHandler } = require("../handlers/usersHandler");

userRoutes.get("/getUserEmail", getUserEmailHandler)
userRoutes.get("/getUsername", getUsernameHandler)
userRoutes.get("/getAllUser", getAllUsersHandler)

module.exports = userRoutes;