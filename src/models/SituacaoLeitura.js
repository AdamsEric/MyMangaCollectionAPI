const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class SituacaoLeitura extends Model {}

SituacaoLeitura.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  ordem: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  stConcluido: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'SituacaoLeitura'
});

module.exports = SituacaoLeitura;