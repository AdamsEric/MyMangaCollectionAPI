const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Demografia extends Model {}

Demografia.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  detalhes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Demografia'
});

module.exports = Demografia;