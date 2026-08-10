// src/data/matches.js
// Almacenamiento en memoria para el recurso "matches" (partidas realizadas).

let matches = [
  { id: 1, gameId: 1, playerId: 1, result: 'win' },
  { id: 2, gameId: 2, playerId: 2, result: 'lose' }
];

let nextId = 3;

module.exports = {
  matches,
  getNextId: () => nextId++
};
