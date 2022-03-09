// Dependencias.
const db = require("mongoose");
db.Promise = global.Promise;

// Conexión a la base de datos.
async function connect(url) {
  await db.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log(`[SERVER][🔥] Base de datos connectada!`);
}

// Exportación.
module.exports = connect;
