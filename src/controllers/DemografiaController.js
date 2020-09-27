const { Guid, Response } = require('../util/helpers');

const Demografia = require('../models/Demografia');

module.exports = {
  async listar(req, res) {
    try {
      const demografias = await Demografia.findAll({
        order: [['descricao']]
      });

      return Response.onSuccess(res, demografias);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async obterPorId(req, res) {
    try {
      const demografia = await Demografia.findByPk(req.params.id);

      return demografia ? Response.onSuccess(res, demografia)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async inserir(req, res) {
    try {
      const { descricao, detalhes } = req.body;
      const id = Guid.newGuid();

      const [demografia, created] = await Demografia.findOrCreate({
        where: { descricao },
        defaults: { id, descricao, detalhes }
      });

      return created ? Response.onCreate(res, demografia)
        : Response.onSuccess(res, demografia);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async editar(req, res) {
    try {
      const { id, descricao, detalhes } = req.body;
      await Demografia.update({
        descricao, detalhes
      }, { where: { id } });
      const demografia = await Demografia.findByPk(id);

      return Response.onUpdate(res, demografia);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Demografia.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  }
};