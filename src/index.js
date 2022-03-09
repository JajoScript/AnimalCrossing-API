// Dependencias.
require("dotenv").config();
const express = require("express");
const router = require("./network/routes");
const db = require("./models/database");

// App
const app = express();

// Router.
router(app);

// Ejecutar el servidor.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `[SERVER][🔥] Server corriendo en: http://${
      process.env.DOMAIN || "localhost"
    }:${PORT}`
  );

  // Conexión a la base de datos.
  db(process.env.URI_MONGODB);
});
