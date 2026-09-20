const express = require('express');

const usersRoutes = require('./routes/users.routes');
const workoutsRoutes = require('./routes/workouts.routes');
const exercisesRoutes = require('./routes/exercises.routes');

const app = express();

const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/users', usersRoutes);
app.use('/workouts', workoutsRoutes);
app.use('/exercises', exercisesRoutes);

app.get('/', (req, res) => {
    res.send('Workout Tracker API funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});