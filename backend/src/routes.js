const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// primeiro parametro é a rota segundo função
// REQ -> requisição, pega usuário, corpo, cabeçalho, autenticação e etc
// RES -> resposta que vamos dar para requisição
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;