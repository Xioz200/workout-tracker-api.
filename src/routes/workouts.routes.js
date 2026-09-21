const express = require('express');
const router = express.Router();

// Base de datos temporal en memoria
let workouts = [
    { id: 1, userId: 1, name: 'Rutina de Pecho y Tríceps', date: '2026-09-20' },
    { id: 2, userId: 2, name: 'Rutina de Pierna', date: '2026-09-21' }
];

// GET: Obtener todos los entrenamientos
router.get('/', (req, res) => {
    res.json(workouts);
});

// POST - Crear un workout
router.post('/', (req, res) => {
    const { name, userId } = req.body;

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

// GET: Obtener un entrenamiento por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const workout = workouts.find(w => w.id === id);

    if (!workout) {
        return res.status(404).json({ error: 'Entrenamiento no encontrado' });
    }

    res.json(workout);
});

// POST: Crear un nuevo entrenamiento
router.post('/', (req, res) => {
    const { userId, name, date } = req.body;

    if (!userId || !name) {
        return res.status(400).json({ error: 'userId y name son obligatorios' });
    }

    const newWorkout = {
        id: workouts.length + 1,
        userId: parseInt(userId),
        name,
        date: date || new Date().toISOString().split('T')[0]
    };

    workouts.push(newWorkout);
    res.status(201).json(newWorkout);
});

module.exports = router;