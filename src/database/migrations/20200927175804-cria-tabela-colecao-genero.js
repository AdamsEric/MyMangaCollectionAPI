module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('ColecaoGenero', {
      ColecaoId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Colecao'
          },
          key: 'Id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      GeneroId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Genero'
          },
          key: 'Id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }).then(() => {
      queryInterface.addConstraint('ColecaoGenero', ['ColecaoId', 'GeneroId'], {
        type: 'primary key',
        name: 'colecao_genero_pk'
      });
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ColecaoGenero');
  }
};
