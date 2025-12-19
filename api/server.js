// server.js - Рабочая версия для Vercel Serverless
const jsonServer = require('json-server');

// Создаём сервер
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Настраиваем CORS для фронтенда
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Используем middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Всегда отдаём router (все маршруты)
server.use(router);

// Экспортируем для Vercel Serverless
module.exports = server;
