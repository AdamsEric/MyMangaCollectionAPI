const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../database');

const Editora = require('./Editora');
const Serie = require('./Serie');
const Periodicidade = require('./Periodicidade');
const ClassificacaoIndicativa = require('./ClassificacaoIndicativa');
const Demografia = require('./Demografia');
const Genero = require('./Genero');
const Volume = require('./Volume');

class Colecao extends Model { }

Colecao.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  tituloOriginal: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  tituloAlternativo: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  autor: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  roteirista: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  ilustrador: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  editoraId: {
    type: DataTypes.UUID,
    references: {
      model: Editora,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  stPublicacaoEmAndamento: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  stPublicacaoOriginalEmAndamento: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  quantidadeTotalVolumes: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  serieId: {
    type: DataTypes.UUID,
    references: {
      model: Serie,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  generoId: {
    type: DataTypes.UUID,
    references: {
      model: Genero,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  periodicidadeId: {
    type: DataTypes.UUID,
    references: {
      model: Periodicidade,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  classificacaoIndicativaId: {
    type: DataTypes.UUID,
    references: {
      model: ClassificacaoIndicativa,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  demografiaId: {
    type: DataTypes.UUID,
    references: {
      model: Demografia,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  sequelize,
  modelName: 'Colecao'
});

Colecao.hasOne(Editora, {
  foreignKey: 'id',
  sourceKey: 'editoraId',
  as: 'editora'
});
Colecao.hasOne(Serie, {
  foreignKey: 'id',
  sourceKey: 'serieId',
  as: 'serie'
});
Colecao.hasOne(Periodicidade, {
  foreignKey: 'id',
  sourceKey: 'periodicidadeId',
  as: 'periodicidade'
});
Colecao.hasOne(ClassificacaoIndicativa, {
  foreignKey: 'id',
  sourceKey: 'classificacaoIndicativaId',
  as: 'classificacaoIndicativa'
});
Colecao.hasOne(Demografia, {
  foreignKey: 'id',
  sourceKey: 'demografiaId',
  as: 'demografia'
});
Colecao.hasOne(Genero, {
  foreignKey: 'id',
  sourceKey: 'generoId',
  as: 'genero'
});
Colecao.hasMany(Volume, {
  foreignKey: 'colecaoId',
  sourceKey: 'id',
  as: 'volumes'
});

module.exports = Colecao;