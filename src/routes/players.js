// src/routes/players.js
const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

router.get('/players', playersController.getAllPlayers);
router.get('/players/:id', playersController.getPlayerById);
router.post('/players', playersController.createPlayer);
router.patch('/players/:id', playersController.updatePlayerPartial);
router.delete('/players/:id', playersController.deletePlayer);

module.exports = router;
