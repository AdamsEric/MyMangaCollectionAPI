const { Guid } = require('../../util/helpers');

const dadosPeriodicidade = [
  { Id: Guid.newGuid(), Descricao: 'Semanal', QuantidadeDias: 7, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Quinzenal', QuantidadeDias: 15, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Mensal', QuantidadeDias: 30, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Bimestral', QuantidadeDias: 60, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Trimestral', QuantidadeDias: 90, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Semestral', QuantidadeDias: 180, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Anual', QuantidadeDias: 365, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Especial', QuantidadeDias: 100000, CreatedAt: new Date(), UpdatedAt: new Date() }
];

const dadosClassificacaoIndicativa = [
  { Id: Guid.newGuid(), Sigla: 'L', Descricao: 'Livre', Conteudo: null, CorHexIndicacao: '#0c9447', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Sigla: '10', Descricao: '10 anos', Conteudo: null, CorHexIndicacao: '#0f7dc2', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Sigla: '12', Descricao: '12 anos', Conteudo: null, CorHexIndicacao: '#f8c411', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Sigla: '14', Descricao: '14 anos', Conteudo: null, CorHexIndicacao: '#e67824', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Sigla: '16', Descricao: '16 anos', Conteudo: null, CorHexIndicacao: '#e67824', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Sigla: '18', Descricao: '18 anos', Conteudo: null, CorHexIndicacao: '#1d1815', CreatedAt: new Date(), UpdatedAt: new Date() }
];

const dadosDemografia = [
  { Id: Guid.newGuid(), Descricao: 'Kodomo', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Shounen', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Shoujo', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Seinen', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Josei', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Hentai', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Ecchi', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Yaoi', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Yuri', CreatedAt: new Date(), UpdatedAt: new Date() }
];

const dadosGenero = [
  { Id: Guid.newGuid(), Descricao: 'Ação', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Aventura', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Romance', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Drama', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Comédia', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Horror', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Batalha', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Policial', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Esporte', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Game', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Fantasia', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Sci-Fi', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Slice-of-life', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Vida escolar', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Sobrenatural', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Garota Mágica', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Space Opera', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Pós-apocaliptico', CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Descricao: 'Histórico', CreatedAt: new Date(), UpdatedAt: new Date() }
];

const dadosSituacaoLeitura = [
  { Id: Guid.newGuid(), Ordem: 1, Descricao: 'Não lido', StConcluido: false, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Ordem: 2, Descricao: 'Lendo', StConcluido: false, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Ordem: 3, Descricao: 'Lido', StConcluido: true, CreatedAt: new Date(), UpdatedAt: new Date() },
  { Id: Guid.newGuid(), Ordem: 4, Descricao: 'Relendo', StConcluido: true, CreatedAt: new Date(), UpdatedAt: new Date() }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Periodicidade', dadosPeriodicidade);
    await queryInterface.bulkInsert('ClassificacaoIndicativa', dadosClassificacaoIndicativa);
    await queryInterface.bulkInsert('Demografia', dadosDemografia);
    await queryInterface.bulkInsert('Genero', dadosGenero);
    await queryInterface.bulkInsert('SituacaoLeitura', dadosSituacaoLeitura);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SituacaoLeitura', null, {});
    await queryInterface.bulkDelete('Genero', null, {});
    await queryInterface.bulkDelete('Demografia', null, {});
    await queryInterface.bulkDelete('ClassificacaoIndicativa', null, {});
    await queryInterface.bulkDelete('Periodicidade', null, {});
  }
};