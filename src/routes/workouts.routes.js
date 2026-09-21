const express = require('express');

const router = express.Router();

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

// GET /workouts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    const name = req.query.name;

    let result = workouts;

    if (name) {
        result = result.filter(workout =>
            workout.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (req.query.limit !== undefined) {
        if (isNaN(limit) || limit <= 0) {
            return res.status(400).json({
                error: 'El parámetro limit debe ser un número positivo'
            });
        }

        result = result.slice(0, limit);
    }

    res.status(200).json(result);
});

// GET /workouts/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const workout = workouts.find(workout => workout.id === id);

    if (!workout) {
        return res.status(404).json({
            error: 'Workout no encontrado'
        });
    }

    res.status(200).json(workout);
});

// POST /workouts
router.post('/', (req, res) => {
    const { name, userId } = req.body;

    if (!name || !userId) {
        return res.status(400).json({
            error: 'El nombre del workout y el userId son obligatorios'
        });
    }

    const newWorkout = {
        id: workouts.length + 1,
        name: name,
        userId: userId
    };

    workouts.push(newWorkout);

    res.status(201).json({
        mensaje: 'Workout creado correctamente',
        workout: newWorkout
    });
});

// DELETE /workouts/:id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const index = workouts.findIndex(workout => workout.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Workout no encontrado'
        });
    }

    workouts.splice(index, 1);

    res.status(204).send();
});

module.exports = router;