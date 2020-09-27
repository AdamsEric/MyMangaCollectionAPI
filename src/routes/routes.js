const express = require('express');
const routes = express.Router();

/** Controllers */
const SerieController = require('./../controllers/SerieController');
const EditoraController = require('./../controllers/EditoraController');
const PeriodicidadeController = require('./../controllers/PeriodicidadeController');
const ClassificacaoIndicativaController = require('./../controllers/ClassificacaoIndicativaController');
const DemografiaController = require('./../controllers/DemografiaController');
const GeneroController = require('./../controllers/GeneroController');
const SituacaoLeituraController = require('./../controllers/SituacaoLeituraController');
const ColecaoController = require('./../controllers/ColecaoController');
const VolumeController = require('./../controllers/VolumeController');

/** Rotas */
/** Rotas de série */
routes.get('/serie', SerieController.listar);
routes.get('/serie/:id', SerieController.obterPorId);
routes.post('/serie', SerieController.inserir);
routes.put('/serie', SerieController.editar);
routes.delete('/serie/:id', SerieController.excluir);

/** Rotas de editora */
routes.get('/editora', EditoraController.listar);
routes.get('/editora/:id', EditoraController.obterPorId);
routes.post('/editora', EditoraController.inserir);
routes.put('/editora', EditoraController.editar);
routes.delete('/editora/:id', EditoraController.excluir);

/** Rotas de periodicidade */
routes.get('/periodicidade', PeriodicidadeController.listar);
routes.get('/periodicidade/:id', PeriodicidadeController.obterPorId);
routes.post('/periodicidade', PeriodicidadeController.inserir);
routes.put('/periodicidade', PeriodicidadeController.editar);
routes.delete('/periodicidade/:id', PeriodicidadeController.excluir);

/** Rotas de classificação indicativa */
routes.get('/classificacao_indicativa', ClassificacaoIndicativaController.listar);
routes.get('/classificacao_indicativa/:id', ClassificacaoIndicativaController.obterPorId);
routes.post('/classificacao_indicativa', ClassificacaoIndicativaController.inserir);
routes.put('/classificacao_indicativa', ClassificacaoIndicativaController.editar);
routes.delete('/classificacao_indicativa/:id', ClassificacaoIndicativaController.excluir);

/** Rotas de demografia */
routes.get('/demografia', DemografiaController.listar);
routes.get('/demografia/:id', DemografiaController.obterPorId);
routes.post('/demografia', DemografiaController.inserir);
routes.put('/demografia', DemografiaController.editar);
routes.delete('/demografia/:id', DemografiaController.excluir);

/** Rotas de gênero */
routes.get('/genero', GeneroController.listar);
routes.get('/genero/:id', GeneroController.obterPorId);
routes.post('/genero', GeneroController.inserir);
routes.put('/genero', GeneroController.editar);
routes.delete('/genero/:id', GeneroController.excluir);

/** Rotas de situação de leitura */
routes.get('/situacao_leitura', SituacaoLeituraController.listar);
routes.get('/situacao_leitura/:id', SituacaoLeituraController.obterPorId);
routes.post('/situacao_leitura', SituacaoLeituraController.inserir);
routes.put('/situacao_leitura', SituacaoLeituraController.editar);
routes.delete('/situacao_leitura/:id', SituacaoLeituraController.excluir);

/** Rotas de coleção */
routes.get('/colecao', ColecaoController.listar);
routes.get('/colecao/:id', ColecaoController.obterPorId);
routes.post('/colecao', ColecaoController.inserir);
routes.put('/colecao', ColecaoController.editar);
routes.delete('/colecao/:id', ColecaoController.excluir);

/** Rotas de volume */
routes.get('/volume', VolumeController.listar);
routes.get('/volume/:id', VolumeController.obterPorId);
routes.post('/volume', VolumeController.inserir);
routes.put('/volume', VolumeController.editar);
routes.delete('/volume/:id', VolumeController.excluir);

module.exports = routes;