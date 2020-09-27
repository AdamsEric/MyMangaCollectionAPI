const { Guid, Response } = require('../util/helpers');

const Periodicidade = require('../models/Periodicidade');

module.exports = {
  async listar(req, res) {
    try {
      const periodicidades = await Periodicidade.findAll({
        ordem: [['descricao']]
      });

      return Response.onSuccess(res, periodicidades);
    } catch (error) {
      return Response.onError(res, error);
    }
  },
  async obterPorId(req, res) {
    try {
      const periodicidade = await Periodicidade.findByPk(req.params.id);

      return periodicidade ? Response.onSuccess(res, periodicidade)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res);
    }
  },
  async inserir(req, res) {
    try {
      const { descricao } = req.body;
      const id = Guid.newGuid();

      const [periodicidade, created] = await Periodicidade.findOrCreate({
        where: { descricao },
        defaults: { id, descricao }
      });

      return created ? Response.onCreate(res, periodicidade)
        : Response.onSuccess(res, periodicidade);
    } catch (error) {
      return Response.onError(res, 'Não foi possível inserir');
    }
  },
  async editar(req, res) {
    try {
      const { id, descricao } = req.body;
      await Periodicidade.update({ descricao }, { where: { id } });
      const periodicidade = await Periodicidade.findByPk(id);

      return Response.onUpdate(res, periodicidade);
    } catch (error) {
      return Response.onError(res, 'Não foi possível atualizar');
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Periodicidade.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError('Não foi possível excluir');
    }
  }
};