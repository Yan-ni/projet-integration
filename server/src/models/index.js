const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config =
  require('../config/database')[process.env.NODE_ENV || 'development'];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// import all models
fs.readdirSync(__dirname)
  // remove any non javascript file and this current file `index.js`
  .filter((file) => file !== 'index.js' && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );

    db[model.name] = model;
  });

// execute associate functions of each model
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
