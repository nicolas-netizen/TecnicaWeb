const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);
  if (!req.body.nombre) {
    res.status(400).send({
      message: `Content can not be empty! ${req.body.contraseña}`,
    });
    return;
  }

  // Create a Tutorial
  const usuario = {
    nombre: req.body.nombre,
    contraseña: req.body.contraseña,
    esSuperUsuario: req.body.esSuperUsuario ? req.body.esSuperUsuario : false,
  };

  // Save Tutorial in the database
  Usuario.create(usuario)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Usuario.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios.",
      });
    });
};

exports.findUser = (req, res) => {
  const nombre = req.query.nombre;
  const contraseña = req.query.contraseña;
  var condition = { nombre: `${nombre}`, contraseña: `${contraseña}` };

  Usuario.findOne({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Usuario with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Usuario with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Usuario with id=" + id,
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuario.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Usuario with id=${id}. Maybe Usuario was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Usuario with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Usuario.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Usuarios were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Usuarios.",
      });
    });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Usuario.findAll({ where: { esSuperUsuario: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios.",
      });
    });
};
