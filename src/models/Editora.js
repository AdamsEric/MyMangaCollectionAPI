const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Editora extends Model {}

Editora.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Editora'
});

module.exports = Editora;