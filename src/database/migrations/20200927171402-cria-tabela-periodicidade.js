module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Periodicidade', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      Nome: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('Periodicidade');
  }
};