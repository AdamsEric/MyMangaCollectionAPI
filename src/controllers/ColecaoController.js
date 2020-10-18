const { Guid, Response } = require('../util/helpers');

const Colecao = require('../models/Colecao');
const Editora = require('../models/Editora');
const Serie = require('../models/Serie');
const Genero = require('../models/Genero');
const Periodicidade = require('../models/Periodicidade');
const Demografia = require('../models/Demografia');
const ClassificacaoIndicativa = require('../models/ClassificacaoIndicativa');

module.exports = {
  async listar(req, res) {
    try {
      const colecoes = await Colecao.findAll({
        order: [['titulo']],
        include: [
          'editora',
          'serie',
          'genero',
          'demografia',
          'periodicidade',
          'classificacaoIndicativa',
          'volumes'
        ]
      });

      return Response.onSuccess(res, colecoes);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async obterPorId(req, res) {
    try {
      const colecao = await Colecao.findByPk(
        req.params.id,
        {
          include: [
            'editora',
            'serie',
            'genero',
            'demografia',
            'periodicidade',
            'classificacaoIndicativa',
            'volumes'
          ]
        }
      );

      return colecao ? Response.onSuccess(res, colecao)
        : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async inserir(req, res) {
    try {
      const { titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
        ilustrador, editoraId, stPublicacaoEmAndamento,
        stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes,
        serieId, generoId, periodicidadeId, classificacaoIndicativaId,
        demografiaId } = req.body;
      const id = Guid.newGuid();

      const [colecao, created] = await Colecao.findOrCreate({
        where: { titulo, autor },
        defaults: {
          id, titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
          ilustrador, editoraId, stPublicacaoEmAndamento,
          stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes, serieId,
          generoId, periodicidadeId, classificacaoIndicativaId, demografiaId
        }
      });

      return created ? Response.onCreate(res, colecao)
        : Response.onSuccess(res, colecao);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async editar(req, res) {
    try {
      const { id, titulo, tituloOriginal = null, tituloAlternativo = null,
        autor = null, roteirista = null, ilustrador = null,
        editoraId, stPublicacaoEmAndamento, stPublicacaoOriginalEmAndamento,
        quantidadeTotalVolumes, serieId, generoId, periodicidadeId,
        classificacaoIndicativaId, demografiaId } = req.body;

      await Colecao.update(
        {
          titulo, tituloOriginal, tituloAlternativo, autor, roteirista,
          ilustrador, editoraId, stPublicacaoEmAndamento,
          stPublicacaoOriginalEmAndamento, quantidadeTotalVolumes, serieId,
          generoId, periodicidadeId, classificacaoIndicativaId, demografiaId
        },
        { where: { id } }
      );
      const colecao = await Colecao.findByPk(id);

      return Response.onUpdate(res, colecao);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  },
  async excluir(req, res) {
    try {
      const { id } = req.params;
      const qtdeExclusao = await Colecao.destroy({ where: { id } });

      return qtdeExclusao > 0 ? Response.onDelete(res) : Response.notFound(res);
    } catch (error) {
      return Response.onError(res, error.message);
    }
  }
};