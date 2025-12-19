// server.js - минимальная рабочая версия
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Экспорт для Vercel
module.exports = server;
