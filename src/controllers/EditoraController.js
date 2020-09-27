const { Guid, Response } = require('../util/helpers');

const Editora = require('../models/Editora');

module.exports = {
  async listar(req, res) {
    try {
      const editoras = await Editora.findAll({
        ordem: [['nome']]
      });

      return Response.onSuccess(res, editoras);
    } catch (error) {
      return Response.onError(res, error);
    }
  },
  async obterPorId(req, res) {
    try {
      const editora = await Editora.findByPk(req.params.id);

      return editora ? Response.onSuccess(res, editora)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res);
    }
  },
  async inserir(req, res) {
    try {
      const { nome } = req.body;
      const id = Guid.newGuid();

      const [editora, created] = await Editora.findOrCreate({
        where: { nome },
        defaults: { id, nome }
      });

      return created ? Response.onCreate(res, editora)
        : Response.onSuccess(res, editora);
    } catch (error) {
      return Response.onError(res, 'Não foi possível inserir');
    }
  },
  async editar(req, res) {
    try {
      const { id, nome } = req.body;
      await Editora.update({ nome }, { where: { id } });
      const editora = await Editora.findByPk(id);

      return Response.onUpdate(res, editora);
    } catch (error) {
      return Response.onError(res, 'Não foi possível atualizar');
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Editora.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError('Não foi possível excluir');
    }
  }
};