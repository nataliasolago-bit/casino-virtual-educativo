// src/controllers/gamesController.js
// Logica de negocio para el recurso "games", separada de las rutas.

const { games, getNextId } = require('../data/games');

// GET /api/games
function getAllGames(req, res) {
  res.status(200).json(games);
}

// GET /api/games/:id
function getGameById(req, res) {
  const id = parseInt(req.params.id);
  const game = games.find((g) => g.id === id);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }

  res.status(200).json(game);
}

// POST /api/games
function createGame(req, res) {
  const { name, description, difficulty } = req.body;

  if (!name || !description || !difficulty) {
    return res.status(400).json({
      error: 'Faltan campos obligatorios: name, description, difficulty'
    });
  }

  const newGame = {
    id: getNextId(),
    name,
    description,
    difficulty
  };

  games.push(newGame);
  res.status(201).json(newGame);
}

// PUT /api/games/:id
function updateGame(req, res) {
  const id = parseInt(req.params.id);
  const game = games.find((g) => g.id === id);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }

  const { name, description, difficulty } = req.body;

  if (!name || !description || !difficulty) {
    return res.status(400).json({
      error: 'PUT requiere reemplazar todos los campos: name, description, difficulty'
    });
  }

  game.name = name;
  game.description = description;
  game.difficulty = difficulty;

  res.status(200).json(game);
}

// DELETE /api/games/:id
function deleteGame(req, res) {
  const id = parseInt(req.params.id);
  const index = games.findIndex((g) => g.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }

  games.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame
};
