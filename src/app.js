// src/app.js
const express = require('express');
const logger = require('./middleware/logger');
const helloRoutes = require('./routes/hello');
const gamesRoutes = require('./routes/games');
const playersRoutes = require('./routes/players');
const matchesRoutes = require('./routes/matches');
const scoresRoutes = require('./routes/scores');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api', helloRoutes);
app.use('/api', gamesRoutes);
app.use('/api', playersRoutes);
app.use('/api', matchesRoutes);
app.use('/api', scoresRoutes);

module.exports = app;
