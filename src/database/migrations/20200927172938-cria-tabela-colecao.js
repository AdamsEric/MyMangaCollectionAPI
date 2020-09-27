module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Colecao', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      Titulo: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      TituloOriginal: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      TituloAlternativo: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      Autor: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Roteirista: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Ilustrador: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      EditoraId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Editora'
          },
          key: 'Id'
        },
        allowNull: false
      },
      StPublicacaoEmAndamento: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      StPublicacaoOriginalEmAndamento: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      QuantidadeTotalVolumes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      SerieId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Serie'
          },
          key: 'Id'
        },
        allowNull: true
      },
      GeneroId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Genero'
          },
          key: 'Id'
        },
        allowNull: true
      },
      PeriodicidadeId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Periodicidade'
          },
          key: 'Id'
        },
        allowNull: true
      },
      ClassificacaoIndicativaId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'ClassificacaoIndicativa'
          },
          key: 'Id'
        },
        allowNull: true
      },
      DemografiaId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Demografia'
          },
          key: 'Id'
        },
        allowNull: true
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Colecao');
  }
};