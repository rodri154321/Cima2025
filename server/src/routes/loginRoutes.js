const { Router } = require("express");
const loginRouter = Router();
const { loginUser,registerUser,infoUser } = require("../handlers/loginHandler");

loginRouter.post("/login", loginUser)
loginRouter.post("/register", registerUser)
loginRouter.put("/addInfo", infoUser)

module.exports = loginRouter;