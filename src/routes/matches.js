// src/routes/matches.js
const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

router.get('/matches', matchesController.getAllMatches);
router.get('/matches/:id', matchesController.getMatchById);
router.post('/matches', matchesController.createMatch);
router.delete('/matches/:id', matchesController.deleteMatch);

module.exports = router;
