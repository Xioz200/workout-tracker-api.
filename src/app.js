const express = require('express');

const { port } = require('./config/env');

const usersRoutes = require('./routes/v1/users.routes');
const workoutsRoutes = require('./routes/v1/workouts.routes');
const exercisesRoutes = require('./routes/v1/exercises.routes');
const progressRoutes = require('./routes/v1/progress.routes');

const app = express();

// ============================================
// MIDDLEWARES
// ============================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Headers HTTP
app.use((req, res, next) => {
    const contentType = req.get('Content-Type');
    const authorization = req.get('Authorization');

    console.log('Content-Type:', contentType);
    console.log('Authorization:', authorization);

    res.set('X-API-Key', 'workout-tracker-api');

    next();
});

// ============================================
// RUTAS
// ============================================

app.use('/users', usersRoutes);
app.use('/workouts', workoutsRoutes);
app.use('/exercises', exercisesRoutes);
app.use('/progress', progressRoutes);

// ============================================
// RUTA PRINCIPAL
// ============================================

app.get('/', (req, res) => {
    res.status(200).send('Workout Tracker API funcionando');
});

// ============================================
// RUTA PARA PROBAR ERRORES
// ============================================

app.get('/error', (req, res) => {
    try {
        throw new Error('Error interno del servidor');
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// ============================================
// RUTA PARA PROBAR HEADERS
// ============================================

app.get('/headers', (req, res) => {
    res.status(200).json({
        contentType: req.get('Content-Type') || 'No enviado',
        authorization: req.get('Authorization') || 'No enviado',
        apiKey: res.get('X-API-Key')
    });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});