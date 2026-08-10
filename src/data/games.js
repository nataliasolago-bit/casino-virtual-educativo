// src/data/games.js
// Almacenamiento en memoria para el recurso "games".
// No se usa base de datos: los datos viven mientras el servidor esta corriendo
// y se reinician cada vez que se reinicia el servidor. Es suficiente para
// una actividad academica que demuestra el diseno de la API REST.

let games = [
  { id: 1, name: 'Ruleta de Probabilidad', description: 'Juego educativo sobre probabilidad basica', difficulty: 'easy' },
  { id: 2, name: 'Blackjack Didactico', description: 'Practica de suma y toma de decisiones', difficulty: 'medium' }
];

let nextId = 3;

module.exports = {
  games,
  getNextId: () => nextId++
};
