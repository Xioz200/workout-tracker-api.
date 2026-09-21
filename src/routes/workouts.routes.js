const express = require('express');

const router = express.Router();

// GET /workouts
// Obtener todos los workouts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    const name = req.query.name;

    let workouts = [
        {
            id: 1,
            name: 'Rutina de pecho',
            userId: 1
        },
        {
            id: 2,
            name: 'Rutina de piernas',
            userId: 2
        }
    ];

    // Filtrar por nombre
    if (name) {
        workouts = workouts.filter(workout =>
            workout.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    // Validar y aplicar limit
    if (req.query.limit !== undefined) {
        if (isNaN(limit) || limit <= 0) {
            return res.status(400).json({
                error: 'El parámetro limit debe ser un número positivo'
            });
        }

        workouts = workouts.slice(0, limit);
    }

    res.status(200).json(workouts);
});


// GET /workouts/:id
// Obtener un workout por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const workouts = [
        {
            id: 1,
            name: 'Rutina de pecho',
            userId: 1
        },
        {
            id: 2,
            name: 'Rutina de piernas',
            userId: 2
        }
    ];

    // Validar que el ID sea un número
    if (isNaN(id)) {
        return res.status(400).json({
            error: 'El ID debe ser un número'
        });
    }

    const workout = workouts.find(workout => workout.id === id);

    // Si no existe
    if (!workout) {
        return res.status(404).json({
            error: 'Workout no encontrado'
        });
    }

    res.status(200).json(workout);
});


// POST /workouts
// Crear un nuevo workout
router.post('/', (req, res) => {
    const { name, userId } = req.body;

    // Validar datos obligatorios
    if (!name || !userId) {
        return res.status(400).json({
            error: 'El nombre del workout y el userId son obligatorios'
        });
    }

    const newWorkout = {
        id: 3,
        name: name,
        userId: userId
    };

    res.status(201).json({
        mensaje: 'Workout creado correctamente',
        workout: newWorkout
    });
});

module.exports = router;
