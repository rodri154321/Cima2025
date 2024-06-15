const { Router } = require("express");
const loginRouter = Router();
const { loginUser,registerUser,infoUser,experimentaUser, montoUser } = require("../handlers/loginHandler");

loginRouter.post("/login", loginUser)
loginRouter.post("/register", registerUser)
loginRouter.put("/addInfo", infoUser)
loginRouter.put("/addExperimenta", experimentaUser)
loginRouter.put("/updateMonto", montoUser)

module.exports = loginRouter;