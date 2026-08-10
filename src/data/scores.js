// src/data/scores.js
// Almacenamiento en memoria para el recurso "scores" (puntuaciones).

let scores = [
  { id: 1, playerId: 1, matchId: 1, points: 100 },
  { id: 2, playerId: 2, matchId: 2, points: 0 }
];

let nextId = 3;

module.exports = {
  scores,
  getNextId: () => nextId++
};
