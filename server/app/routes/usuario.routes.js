module.exports = (app) => {
  const usuario = require("../controllers/usuarios.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", usuario.create);

  // Retrieve all Tutorials
  router.get("/", usuario.findAll);

  // Retrieve all published Tutorials
  router.get("/superusuario", usuario.findAllPublished);

  router.get("/verificarUsuario", usuario.findUser);

  // Retrieve a single Tutorial with id
  router.get("/:id", usuario.findOne);

  // Update a Tutorial with id
  router.put("/:id", usuario.update);

  // Delete a Tutorial with id
  router.delete("/:id", usuario.delete);

  // Delete all Tutorials
  router.delete("/", usuario.deleteAll);

  app.use("/api/usuarios", router);
};
