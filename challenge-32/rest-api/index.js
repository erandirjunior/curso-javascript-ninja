'use strict';

// Importando libs
var express = require('express');
var cors = require('cors');
var app = express();

var users = {
	joao: {
		nome: 'João',
		idade: 30
	},
	maria: {
		nome: 'Maria',
		idade: 23
	}
};

// Autorizando o cors
app.use(cors());

// Rotas
app.get('/', function(req, res) {
	res.send('<h1>Home</h1>');
});

app.get('/user', function(req, res) {
	res.send('<h1>User</h1>');
});

// Rota dinâmica
app.get('/user/:username', function(req, res) {
	// Retornando dados
	var username = req.params.username;
	if (users[username]) {
		return res.json(users[username]);
	}
	res.status(404).json({ error: 'Usuário não encontrado' });
});

// Seleciona a porta utilizada
app.listen(3000);