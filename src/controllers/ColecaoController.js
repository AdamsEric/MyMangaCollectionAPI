const { Guid, Response } = require('../util/helpers');

const Colecao = require('../models/Colecao');

module.exports = {
  async listar(req, res) {
    try {
      const colecoes = await Colecao.findAll({
        ordem: [['descricao']]
      });

      return Response.onSuccess(res, colecoes);
    } catch (error) {
      return Response.onError(res, error);
    }
  },
  async obterPorId(req, res) {
    try {
      const colecao = await Colecao.findByPk(req.params.id);

      return colecao ? Response.onSuccess(res, colecao)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res);
    }
  },
  async inserir(req, res) {
    try {
      const { titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
        ilustrador, editoraId, editoraOriginalId, stPublicacaoEmAndamento,
        stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes,
        serieId, periodicidadeId, classificacaoIndicativaId,
        demografiaId } = req.body;
      const id = Guid.newGuid();

      const [colecao, created] = await Colecao.findOrCreate({
        where: { titulo, autor },
        defaults: {
          id, titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
          ilustrador, editoraId, editoraOriginalId, stPublicacaoEmAndamento,
          stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes, serieId,
          periodicidadeId, classificacaoIndicativaId, demografiaId
        }
      });

      return created ? Response.onCreate(res, colecao)
        : Response.onSuccess(res, colecao);
    } catch (error) {
      return Response.onError(res, 'Não foi possível inserir');
    }
  },
  async editar(req, res) {
    try {
      const { id, titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
        ilustrador, editoraId, editoraOriginalId, stPublicacaoEmAndamento,
        stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes, serieId,
        periodicidadeId, classificacaoIndicativaId, demografiaId } = req.body;

      await Colecao.update(
        {
          titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
          ilustrador, editoraId, editoraOriginalId, stPublicacaoEmAndamento,
          stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes, serieId,
          periodicidadeId, classificacaoIndicativaId, demografiaId
        },
        { where: { id } }
      );
      const colecao = await Colecao.findByPk(id);

      return Response.onUpdate(res, colecao);
    } catch (error) {
      return Response.onError(res, 'Não foi possível atualizar');
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Colecao.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError('Não foi possível excluir');
    }
  }
};