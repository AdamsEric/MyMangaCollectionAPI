const { Guid, Response } = require('../util/helpers');

const ClassificacaoIndicativa = require('../models/ClassificacaoIndicativa');

module.exports = {
  async listar(req, res) {
    try {
      const classificacoes = await ClassificacaoIndicativa.findAll({
        ordem: [['sigla']]
      });

      return Response.onSuccess(res, classificacoes);
    } catch (error) {
      return Response.onError(res, error);
    }
  },
  async obterPorId(req, res) {
    try {
      const classificacao = await ClassificacaoIndicativa.findByPk(req.params.id);

      return classificacao ? Response.onSuccess(res, classificacao)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res);
    }
  },
  async inserir(req, res) {
    try {
      const { sigla, descricao, conteudo, corHexIndicacao } = req.body;
      const id = Guid.newGuid();

      const [classificacao, created] = await ClassificacaoIndicativa.findOrCreate({
        where: { sigla },
        defaults: { id, sigla, descricao, conteudo, corHexIndicacao }
      });

      return created ? Response.onCreate(res, classificacao)
        : Response.onSuccess(res, classificacao);
    } catch (error) {
      return Response.onError(res, 'Não foi possível inserir');
    }
  },
  async editar(req, res) {
    try {
      const { id, sigla, descricao, conteudo, corHexIndicacao } = req.body;
      await ClassificacaoIndicativa.update({
        sigla, descricao, conteudo, corHexIndicacao
      }, { where: { id } });
      const classificacao = await ClassificacaoIndicativa.findByPk(id);

      return Response.onUpdate(res, classificacao);
    } catch (error) {
      return Response.onError(res, 'Não foi possível atualizar');
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await ClassificacaoIndicativa.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError('Não foi possível excluir');
    }
  }
};