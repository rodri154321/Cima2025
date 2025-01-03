require('dotenv').config()
const { Sequelize } = require("sequelize");
require('dotenv/config')


const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false,
});


const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

// Definición de las relaciones
const { admins, users, plenarias, talleres, pagos } = sequelize.models;

talleres.hasMany(users, {
  foreignKey: 'tallerId',
});
users.belongsTo(talleres, {
  foreignKey: 'tallerId',
});

users.hasMany(pagos, {
  foreignKey: 'idUsuario',
});
pagos.belongsTo(users, {
  foreignKey: 'idUsuario',
});

users.belongsToMany(plenarias, {
  through: 'UsuariosXPlenarias'
});
plenarias.belongsToMany(users, {
  through: 'UsuariosXPlenarias'
});

// 1. Relación uno a muchos: users -> taller
//users.belongsTo(taller, { as: "taller" });
//taller.hasMany(users, { as: "users", foreignKey: 'idUser' });

module.exports = {
  ...sequelize.models, /// para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
