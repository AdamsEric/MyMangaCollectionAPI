module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Demografia', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      Descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Detalhes: {
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
    await queryInterface.dropTable('Demografia');
  }
};