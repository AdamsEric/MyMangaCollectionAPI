/**
 * Função para retorno de resposta após criação de um objeto
 * @param {object} response - Response da requisição
 * @param {object} data - Dados para retorno
 * @returns {object} Resposta de status "Created (201)".
 */
const onCreate = (response, data) => {
  return response.status(201).json(data);
};

/**
 * Função para retorno de resposta após atualização de um objeto
 * @param {object} response - Response da requisição
 * @param {object} data - Dados para retorno
 * @returns {object} Resposta de status "OK (200)".
 */
const onUpdate = (response, data) => {
  return response.status(200).json(data);
};

/**
 * Função para retorno de resposta após remoção de um objeto
 * @param {object} response - Response da requisição
 * @returns {object} Resposta de status "No Content (204)".
 */
const onDelete = (response) => {
  return response.status(204).json();
};

/**
 * Função para retorno de resposta após inexistência de referência de um objeto
 * @param {object} response - Response da requisição
 * @returns {object} Resposta de status "Not Fount (404)".
 */
const notFound = (response) => {
  return response.status(404).json();
};

/**
 * Função para retorno de resposta de requisição não autorizada
 * @param {object} response - Response da requisição
 * @param {object} err - Erro apresentado
 * @returns {object} Resposta de status "Unauthorized (401)".
 */
const unauthorized = (response, err = 'Não autorizado') => {
  return response.status(401).json({
    erro: err
  });
};

/**
 * Função para retorno de resposta de requisição rejeitada
 * @param {object} response - Response da requisição
 * @returns {object} Resposta de status "Forbidden (403)".
 */
const forbidden = (response) => {
  return response.status(403).json();
};

/**
 * Função para retorno de resposta com sucesso
 * @param {object} response - Response da requisição
 * @param {object} data - Dados para retorno
 * @returns {object} Resposta de status "OK (200)".
 */
const onSuccess = (response, data) => {
  return response.status(200).json(data);
};

/**
 * Função para retorno de resposta após requisição inválida
 * @param {object} response - Response da requisição
 * @param {object} err - Erro apresentado
 * @returns {object} Resposta de status "Bad request (400)".
 */
const onError = (response, err = 'Não foi possível realizar a operação') => {
  return response.status(400).json({
    erro: err
  });
};

/**
 * Função para retorno de resposta sem conteúdo
 * @param {object} response - Response da requisição
 * @returns {object} Resposta de status "No content (204)".
 */
const noContent = (response) => {
  return response.status(204).json();
};

module.exports = {
  onCreate,
  onUpdate,
  onDelete,
  notFound,
  unauthorized,
  forbidden,
  onSuccess,
  onError,
  noContent
};