// Dependencias.
const express = require("express");
const Response = require("../../network/response");

// Instanciación del router.
const router = express.Router();

// Definición de rutas.
router.get("/", (request, response) => {
  Response.success(request, response, "Lista de prendas de ropa.", 200);
});

// Exportación.
module.exports = router;
