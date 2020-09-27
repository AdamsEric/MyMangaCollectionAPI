module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Serie', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      Nome: {
        type: Sequelize.STRING(100),
        allowNull: false
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
    await queryInterface.dropTable('Serie');
  }
};