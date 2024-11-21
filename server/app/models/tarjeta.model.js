module.exports = (sequelize, Sequelize) => {
  const Tarjeta = sequelize.define("tarjeta", {
    titulo: {
      type: Sequelize.TEXT,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    fecha: {
      type: Sequelize.DATE,
    },
    idUsuario: {
      type: Sequelize.STRING,
    },
    tipoTarjeta: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    grafico: {
      type: Sequelize.JSON,
    },
    imagen1: {
      type: Sequelize.STRING,
    },
    imagen2: {
      type: Sequelize.STRING,
    },
    imagen3: {
      type: Sequelize.STRING,
    },
  });

  return Tarjeta;
};
