const { Router } = require("express");
const userRoutes = Router();
const { getUserEmailHandler, getUsernameHandler, getAllUsersHandler, getUserPaisHandler, deleteUserHandler } = require("../handlers/usersHandler");

userRoutes.get("/getUserEmail", getUserEmailHandler)
userRoutes.get("/getUsername", getUsernameHandler)
userRoutes.get("/getUserPais", getUserPaisHandler)
userRoutes.get("/getAllUser", getAllUsersHandler)
userRoutes.delete("/deleteUserId", deleteUserHandler)

module.exports = userRoutes;