const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Genero extends Model {}

Genero.init({
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
  modelName: 'Genero'
});

module.exports = Genero;