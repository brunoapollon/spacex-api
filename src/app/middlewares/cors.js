module.exports = function cors(request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', process.env.FRONT_END_URL);
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
};
