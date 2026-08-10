// src/routes/games.js
// Define las rutas del recurso "games" y las conecta con su controller.

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

router.get('/games', gamesController.getAllGames);
router.get('/games/:id', gamesController.getGameById);
router.post('/games', gamesController.createGame);
router.put('/games/:id', gamesController.updateGame);
router.delete('/games/:id', gamesController.deleteGame);

module.exports = router;
