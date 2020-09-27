const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../database');

const Colecao = require('./Colecao');
const Genero = require('./Genero');

class ColecaoGenero extends Model {}

ColecaoGenero.init({
  colecaoId: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Colecao,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  generoId: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Genero,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
}, {
  sequelize,
  modelName: 'ColecaoGenero'
});

ColecaoGenero.hasOne(Colecao, { foreignKey: 'id', sourceKey: 'colecaoId' });
ColecaoGenero.hasOne(Genero, { foreignKey: 'id', sourceKey: 'generoId' });

module.exports = ColecaoGenero;