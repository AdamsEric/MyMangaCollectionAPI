module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ClassificacaoIndicativa', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      Sigla: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      Descricao: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      Conteudo: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      CorHexIndicacao: {
        type: Sequelize.STRING(7),
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
    await queryInterface.dropTable('ClassificacaoIndicativa');
  }
};