const { Guid, Response } = require('../util/helpers');

const Genero = require('../models/Genero');

module.exports = {
  async listar(req, res) {
    try {
      const generos = await Genero.findAll({
        order: [['descricao']]
      });

      return Response.onSuccess(res, generos);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async obterPorId(req, res) {
    try {
      const genero = await Genero.findByPk(req.params.id);

      return genero ? Response.onSuccess(res, genero)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async inserir(req, res) {
    try {
      const { descricao } = req.body;
      const id = Guid.newGuid();

      const [genero, created] = await Genero.findOrCreate({
        where: { descricao },
        defaults: { id, descricao }
      });

      return created ? Response.onCreate(res, genero)
        : Response.onSuccess(res, genero);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async editar(req, res) {
    try {
      const { id, descricao } = req.body;
      await Genero.update({ descricao }, { where: { id } });
      const genero = await Genero.findByPk(id);

      return Response.onUpdate(res, genero);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Genero.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  }
};