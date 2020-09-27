const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Periodicidade extends Model {}

Periodicidade.init({
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
  modelName: 'Periodicidade'
});

module.exports = Periodicidade;