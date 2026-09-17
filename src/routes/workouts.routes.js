const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json([
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
    ]);
});

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

    if (name) {
        workouts = workouts.filter(workout =>
            workout.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (req.query.limit !== undefined) {
        if (isNaN(limit) || limit <= 0) {
            return res.status(400).json({
                error: 'El parámetro limit debe ser un número positivo'
            });
        }

        workouts = workouts.slice(0, limit);
    }

    res.json(workouts);
});
module.exports = router;