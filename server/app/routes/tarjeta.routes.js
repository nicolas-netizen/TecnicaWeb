module.exports = (app) => {
  const tarjeta = require("../controllers/tarjetas.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tarjeta.create);

  // Retrieve all Tutorials
  router.get("/", tarjeta.findAll);

  // Retrieve all published Tutorials
  //   router.get("/superusuario", tarjeta.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tarjeta.findOne);

  // Update a Tutorial with id
  router.put("/:id", tarjeta.update);

  // Delete a Tutorial with id
  router.delete("/:id", tarjeta.delete);

  // Delete all Tutorials
  router.delete("/", tarjeta.deleteAll);

  app.use("/api/tarjetas", router);
};
