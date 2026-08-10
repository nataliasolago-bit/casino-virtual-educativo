// src/routes/scores.js
const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

router.get('/scores', scoresController.getAllScores);
router.get('/scores/:playerId', scoresController.getScoreByPlayerId);
router.post('/scores', scoresController.createScore);

module.exports = router;
