// src/controllers/playersController.js
// Logica de negocio para el recurso "players".

const { players, getNextId } = require('../data/players');

function getAllPlayers(req, res) {
  res.status(200).json(players);
}

function getPlayerById(req, res) {
  const id = parseInt(req.params.id);
  const player = players.find((p) => p.id === id);
  if (!player) {
    return res.status(404).json({ error: 'Jugador no encontrado' });
  }
  res.status(200).json(player);
}

function createPlayer(req, res) {
  const { username, level } = req.body;
  if (!username || level === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: username, level' });
  }
  const newPlayer = { id: getNextId(), username, level };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
}

function updatePlayerPartial(req, res) {
  const id = parseInt(req.params.id);
  const player = players.find((p) => p.id === id);
  if (!player) {
    return res.status(404).json({ error: 'Jugador no encontrado' });
  }
  const { username, level } = req.body;
  if (username !== undefined) player.username = username;
  if (level !== undefined) player.level = level;
  res.status(200).json(player);
}

function deletePlayer(req, res) {
  const id = parseInt(req.params.id);
  const index = players.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Jugador no encontrado' });
  }
  players.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayerPartial,
  deletePlayer
};
