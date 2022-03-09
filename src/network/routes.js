// Dependencias.
const itemsRouter = require('../components/items/network');
const clothingRouter = require('../components/clothing/network');
const furnitureRouter = require('../components/furniture/network');

// Definición de rutas.
const routes = (server) => {
  // Items.
  server.use('/items', itemsRouter);

  // Clothing.
  server.use('/clothing', clothingRouter);

  // Furniture.
  server.use('/furniture', furnitureRouter);
};

// Exportación
module.exports = routes;