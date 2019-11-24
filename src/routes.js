const express = require('express');
const SessionController = require('./controllers/SessionController');
const CharacterController = require('./controllers/CharacterController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.get('/characters', CharacterController.index);

module.exports = routes;