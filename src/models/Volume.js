const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../database');

const Colecao = require('./Colecao');
const SituacaoLeitura = require('./SituacaoLeitura');

class Volume extends Model {}

Volume.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  colecaoId: {
    type: DataTypes.UUID,
    references: {
      model: Colecao,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    allowNull: false
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  precoCapa: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true
  },
  quantidadePaginas: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  capituloInicial: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  capituloFinal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  situacaoLeituraId: {
    type: DataTypes.UUID,
    references: {
      model: SituacaoLeitura,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    allowNull: false
  },
  ultimoCapituloLido: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  quantidadeExemplares: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Volume'
});

Volume.hasOne(Colecao, { foreignKey: 'id', sourceKey: 'colecaoId' });
Volume.hasOne(SituacaoLeitura, { foreignKey: 'id', sourceKey: 'situacaoLeituraId' });

module.exports = Volume;