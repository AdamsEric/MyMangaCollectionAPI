module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SituacaoLeitura', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      Descricao: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      StConcluido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('SituacaoLeitura');
  }
};