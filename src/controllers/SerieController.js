const { Guid, Response } = require('./../util/helpers');

const Serie = require('./../models/Serie');

module.exports = {
  async listar(req, res) {
    try {
      const series = await Serie.findAll({
        ordem: [['nome']]
      });

      return Response.onSuccess(res, series);
    } catch (error) {
      return Response.onError(res, error);
    }
  },
  async obterPorId(req, res) {
    try {
      const serie = await Serie.findByPk(req.params.id);

      return serie ? Response.onSuccess(res, serie)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res);
    }
  },
  async inserir(req, res) {
    try {
      const { nome } = req.body;
      const id = Guid.newGuid();

      const [serie, created] = await Serie.findOrCreate({
        where: { nome },
        defaults: { id, nome }
      });

      return created ? Response.onCreate(res, serie)
        : Response.onSuccess(res, serie);
    } catch (error) {
      return Response.onError(res, 'Não foi possível inserir');
    }
  },
  async editar(req, res) {
    try {
      const { id, nome } = req.body;
      await Serie.update({ nome }, { where: { id } });
      const serie = await Serie.findByPk(id);

      return Response.onUpdate(res, serie);
    } catch (error) {
      return Response.onError(res, 'Não foi possível atualizar');
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Serie.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError('Não foi possível excluir');
    }
  }
};