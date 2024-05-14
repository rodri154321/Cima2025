const { Router } = require("express");
const pagoRoutes = Router();
const { agregarPagosHandler, getPagosHandler } = require("../handlers/pagosHandler");

pagoRoutes.post("/agregarPago", agregarPagosHandler)
pagoRoutes.get("/getPagos", getPagosHandler)

module.exports = pagoRoutes;