module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    nombre: {
      type: Sequelize.STRING,
    },
    contraseña: {
      type: Sequelize.STRING,
    },
    esSuperUsuario: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Usuario;
};
