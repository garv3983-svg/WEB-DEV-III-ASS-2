// middleware/logger.js
// simple custom middleware that logs every request hitting the server

function logger(req, res, next) {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = logger;
