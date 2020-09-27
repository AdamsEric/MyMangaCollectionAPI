module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Volume', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      ColecaoId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Colecao'
          },
          key: 'Id'
        },
        allowNull: false
      },
      Numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Descricao: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      PrecoCapa: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: true
      },
      QuantidadePaginas: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      CapituloInicial: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      CapituloFinal: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      SituacaoLeituraId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'SituacaoLeitura'
          },
          key: 'Id'
        },
        allowNull: false
      },
      UltimoCapituloLido: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      QuantidadeExemplares: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 1
      },
      Observacoes: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Volume');
  }
};