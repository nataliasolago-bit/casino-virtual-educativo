// src/controllers/matchesController.js
const { matches, getNextId } = require('../data/matches');

function getAllMatches(req, res) {
  res.status(200).json(matches);
}

function getMatchById(req, res) {
  const id = parseInt(req.params.id);
  const match = matches.find((m) => m.id === id);
  if (!match) {
    return res.status(404).json({ error: 'Partida no encontrada' });
  }
  res.status(200).json(match);
}

function createMatch(req, res) {
  const { gameId, playerId, result } = req.body;
  if (!gameId || !playerId || !result) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: gameId, playerId, result' });
  }
  const newMatch = { id: getNextId(), gameId, playerId, result };
  matches.push(newMatch);
  res.status(201).json(newMatch);
}

function deleteMatch(req, res) {
  const id = parseInt(req.params.id);
  const index = matches.findIndex((m) => m.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Partida no encontrada' });
  }
  matches.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  getAllMatches,
  getMatchById,
  createMatch,
  deleteMatch
};
