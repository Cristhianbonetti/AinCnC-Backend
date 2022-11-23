// req.query = Acessar query params (para filtros) Ex:  return res.json({idade: req.query.idade});
// req.params = Acessar route params (para edicao e delete (put, delete)) Ex:  return res.json({id: req.params.id});
// req.body = acessar corpo da requisicao (para criacao, edicao) Ex: return res.json(req.body);
// metodo get: utilizado para buscar uma informacao do backend
// metodo put: editar alguma informacao do backend
// metodo post: criar uma nova informacao no backend
// metodo delete: deletar uma informacao do backend

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes'); 

const app = express();

mongoose.connect('mongodb+srv://aincnc:cris123@aircnc.tslmgyn.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json());
app.use(routes);

app.listen(3333);   