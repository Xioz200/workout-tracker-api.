const express = require('express');

const usersRoutes = require('./routes/users.routes');
const workoutsRoutes = require('./routes/workouts.routes');
const exercisesRoutes = require('./routes/exercises.routes');

const app = express();

const PORT = 3000;

// Middleware para recibir JSON
app.use(express.json());

// Middleware para recibir datos de formularios
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/users', usersRoutes);
app.use('/workouts', workoutsRoutes);
app.use('/exercises', exercisesRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.status(200).send('Workout Tracker API funcionando');
});

// Ruta para probar un error 500
app.get('/error', (req, res) => {
    try {
        throw new Error('Error interno del servidor');
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});