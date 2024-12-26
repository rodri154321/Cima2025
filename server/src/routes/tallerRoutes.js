const { Router } = require("express");
const tallerRoutes = Router();
const { agregarCupoHandler, getTalleresHandler, agregarTallerHandler, borrarTallerHandler, tallerUserHandler, deletallerUserHandler } = require("../handlers/tallerHandler");

tallerRoutes.put("/agregarCupo", agregarCupoHandler)
tallerRoutes.get("/getTalleres", getTalleresHandler)
tallerRoutes.post("/agregarTallerHandler", agregarTallerHandler)
tallerRoutes.delete("/borrarTaller", borrarTallerHandler)
tallerRoutes.put("/tallerUser", tallerUserHandler)
tallerRoutes.put("/sacarTaller", deletallerUserHandler)

module.exports = tallerRoutes;