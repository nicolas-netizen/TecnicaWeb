const db = require("../models");
const Tarjeta = db.tarjeta;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  // Validate request
  console.log(req.body);
  try {
    if (!req.body.titulo) {
      res.status(400).send({
        message: `Content can not be empty! ${req.body.titulo}`,
      });
      return;
    }

    const tarjeta = await Tarjeta.create({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha: Date(),
      idUsuario: req.body.idUsuario,
      tipoTarjeta: req.body.tipoTarjeta || false, // Puedes proporcionar un valor booleano
      grafico: req.body.grafico,
      imagen1: req.body.imagen1,
      imagen2: req.body.imagen2,
      imagen3: req.body.imagen3,
    });

    // Save Tutorial in the database
    res.send(tarjeta);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Tarjeta.",
    });
  }
};

// Retrieve all Tarjetas from the database.
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  var condition = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : null;

  Tarjeta.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tarjetas.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tarjeta.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tarjeta with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tarjeta with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tarjeta.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tarjeta was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tarjeta with id=${id}. Maybe Tarjeta was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tarjeta with id=" + id,
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tarjeta.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tarjeta was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tarjeta with id=${id}. Maybe Tarjeta was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tarjeta with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tarjeta.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tarjetas were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tarjetas.",
      });
    });
};

// exports.findAllPublished = (req, res) => {
//   Tarjeta.findAll({ where: { esSuperUsuario: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving usuarios.",
//       });
//     });
// };
