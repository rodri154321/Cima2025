const { Router } = require("express");
const userRoutes = Router();
const { getUserNameHandler, getAllUsersHandler } = require("../handlers/usersHandler");

userRoutes.get("/getUser", getUserNameHandler)
userRoutes.get("/getAllUser", getAllUsersHandler)

module.exports = userRoutes;
