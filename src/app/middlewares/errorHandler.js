/* eslint-disable no-unused-vars */
module.exports = function errorHandler(error, request, response, next) {
  return response.sendStatus(500);
};
