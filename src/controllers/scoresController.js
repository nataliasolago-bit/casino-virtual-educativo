// src/controllers/scoresController.js
const { scores, getNextId } = require('../data/scores');

function getAllScores(req, res) {
  res.status(200).json(scores);
}

function getScoreByPlayerId(req, res) {
  const playerId = parseInt(req.params.playerId);
  const score = scores.find((s) => s.playerId === playerId);
  if (!score) {
    return res.status(404).json({ error: 'Puntuacion no encontrada para ese jugador' });
  }
  res.status(200).json(score);
}

function createScore(req, res) {
  const { playerId, matchId, points } = req.body;
  if (!playerId || !matchId || points === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: playerId, matchId, points' });
  }
  const newScore = { id: getNextId(), playerId, matchId, points };
  scores.push(newScore);
  res.status(201).json(newScore);
}

module.exports = {
  getAllScores,
  getScoreByPlayerId,
  createScore
};
