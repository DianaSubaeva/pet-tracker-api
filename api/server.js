const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Enable CORS for all routes
server.use(cors());

// Use default middlewares
server.use(middlewares);

// Add custom routes if needed
server.use(jsonServer.bodyParser);

// Custom middleware to handle POST/PUT/DELETE
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = new Date().toISOString();
  }
  if (req.method === 'PUT') {
    req.body.updatedAt = new Date().toISOString();
  }
  next();
});

// Use JSON Server router
server.use('/api', router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Pet Tracker API is running on port ${PORT}`);
  console.log(`API Endpoints:`);
  console.log(`  GET    /api/pets`);
  console.log(`  GET    /api/pets/:id`);
  console.log(`  POST   /api/pets`);
  console.log(`  PUT    /api/pets/:id`);
  console.log(`  DELETE /api/pets/:id`);
  console.log(`  GET    /api/events?petId=:petId`);
  console.log(`  GET    /api/careItems?petId=:petId`);
});
