const { v4: uuidv4 } = require('uuid');

/**
 * Função para geração de chaves GUID.
 * @returns {string} GUID gerado.
 */
const newGuid = () => {
  return uuidv4();
};

module.exports = {
  newGuid
};