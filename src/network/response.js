// La respuesta fue un exito.
exports.success = (request, response, message, status) => {
  // [DEV]: LOG
  console.log(`[SERVER][🔨][LOG][${status}]: ${message}`);

  // Respuesta para el usuario.
  response.status(status || 200).send({
    "error": "",
    "message": message || "Todo bien"
  });
}

// La respuesta fue un error.
exports.error = (request, response, message, status, details) => {
  // [DEV]: error
  console.log(`[SERVER][🔨][ERROR][${status}]: ${datils}`);
  
  // Respuesta para el usuario.
  response.status(status || 500).send({
    "error": message || "Error del servidor",
    "message": ""
  });
}

// La respuesta no fue encontrada.
exports.notFound = (request, response, message, status, datails) => {
  // [DEV]: LOG
  console.log(`[SERVER][🔨][ERROR][${status}]: ${datails}`);

  // Respuesta para el usuario.
  response.status(status || 404).send({
    "error": datails || "Recurso no encontrado",
    "message": ""
  });
}