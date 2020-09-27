const { Guid, Response } = require('../util/helpers');

const SituacaoLeitura = require('../models/SituacaoLeitura');

module.exports = {
  async listar(req, res) {
    try {
      const situacoes = await SituacaoLeitura.findAll({
        ordem: [['descricao']]
      });

      return Response.onSuccess(res, situacoes);
    } catch (error) {
      return Response.onError(res, error);
    }
  },
  async obterPorId(req, res) {
    try {
      const situacao = await SituacaoLeitura.findByPk(req.params.id);

      return situacao ? Response.onSuccess(res, situacao)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res);
    }
  },
  async inserir(req, res) {
    try {
      const { descricao, stConcluido = 0 } = req.body;
      const id = Guid.newGuid();

      const [situacao, created] = await SituacaoLeitura.findOrCreate({
        where: { descricao },
        defaults: { id, descricao, stConcluido }
      });

      return created ? Response.onCreate(res, situacao)
        : Response.onSuccess(res, situacao);
    } catch (error) {
      return Response.onError(res, 'Não foi possível inserir');
    }
  },
  async editar(req, res) {
    try {
      const { id, descricao, stConcluido } = req.body;
      await SituacaoLeitura.update({ descricao, stConcluido }, { where: { id } });
      const situacao = await SituacaoLeitura.findByPk(id);

      return Response.onUpdate(res, situacao);
    } catch (error) {
      return Response.onError(res, 'Não foi possível atualizar');
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await SituacaoLeitura.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError('Não foi possível excluir');
    }
  }
};