const { Router } = require("express");
const loginRouter = Router();
const { postLogin, addInfoUser, postRegisterUser } = require("../handlers/loginHandler");

loginRouter
.post("/login", postLogin)
.post("/register", postRegisterUser)
.put("/addInfo", addInfoUser)

module.exports = loginRouter;