const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o banco e dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');


// Rotas
// use recebe todas requisições
app.use('/api', require('./src/routes'));

// Porta que vai rodar aplicação
app.listen(process.env.PORT || 3000);