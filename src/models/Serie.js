const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Serie extends Model {}

Serie.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Serie'
});

module.exports = Serie;