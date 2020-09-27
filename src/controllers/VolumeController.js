const { Guid, Response } = require('../util/helpers');

const Volume = require('../models/Volume');

module.exports = {
  async listar(req, res) {
    try {
      const volumes = await Volume.findAll({
        ordem: [['numero']]
      });

      return Response.onSuccess(res, volumes);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async obterPorId(req, res) {
    try {
      const volume = await Volume.findByPk(req.params.id);

      return volume ? Response.onSuccess(res, volume)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async inserir(req, res) {
    try {
      const { colecaoId, numero, descricao, precoCapa, quantidadePaginas,
        capituloInicial, capituloFinal, situacaoLeituraId, ultimoCapituloLido, 
        quantidadeExemplares, observacoes } = req.body;
      const id = Guid.newGuid();

      const [volume, created] = await Volume.findOrCreate({
        where: { colecaoId, numero },
        defaults: {
          id, colecaoId, numero, descricao, precoCapa, quantidadePaginas,
          capituloInicial, capituloFinal, situacaoLeituraId, ultimoCapituloLido, 
          quantidadeExemplares, observacoes
        }
      });

      return created ? Response.onCreate(res, volume)
        : Response.onSuccess(res, volume);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async editar(req, res) {
    try {
      const { id, colecaoId, numero, descricao, precoCapa, quantidadePaginas,
        capituloInicial, capituloFinal, situacaoLeituraId, ultimoCapituloLido, 
        quantidadeExemplares, observacoes } = req.body;
      await Volume.update(
        {
          colecaoId, numero, descricao, precoCapa, quantidadePaginas,
          capituloInicial, capituloFinal, situacaoLeituraId, ultimoCapituloLido, 
          quantidadeExemplares, observacoes
        },
        { where: { id } }
      );
      const volume = await Volume.findByPk(id);

      return Response.onUpdate(res, volume);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Volume.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  }
};