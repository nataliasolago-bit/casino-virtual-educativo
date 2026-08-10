// src/data/players.js
// Almacenamiento en memoria para el recurso "players" (jugadores ficticios).

let players = [
  { id: 1, username: 'jugador_ana', level: 3 },
  { id: 2, username: 'jugador_luis', level: 1 }
];

let nextId = 3;

module.exports = {
  players,
  getNextId: () => nextId++
};
