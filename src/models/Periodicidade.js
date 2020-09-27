const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Periodicidade extends Model {}

Periodicidade.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  quantidadeDias: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Periodicidade'
});

module.exports = Periodicidade;