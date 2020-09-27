const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class ClassificacaoIndicativa extends Model {}

ClassificacaoIndicativa.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  sigla: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  conteudo: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  corHexIndicacao: {
    type: DataTypes.STRING(6),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ClassificacaoIndicativa'
});

module.exports = ClassificacaoIndicativa;