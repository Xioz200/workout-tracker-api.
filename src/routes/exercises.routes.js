const express = require('express');

const router = express.Router();

const exercises = [
    {
        id: 1,
        name: 'Press de banca',
        muscleGroup: 'Pecho'
    },
    {
        id: 2,
        name: 'Sentadilla',
        muscleGroup: 'Piernas'
    }
];

router.get('/', (req, res) => {
    res.status(200).json(exercises);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const exercise = exercises.find(exercise => exercise.id === id);

    if (!exercise) {
        return res.status(404).json({
            error: 'Ejercicio no encontrado'
        });
    }

    res.status(200).json(exercise);
});

router.post('/', (req, res) => {
    const { name, muscleGroup } = req.body;

    if (!name || !muscleGroup) {
        return res.status(400).json({
            error: 'El nombre y el grupo muscular son obligatorios'
        });
    }

    const newExercise = {
        id: exercises.length + 1,
        name: name,
        muscleGroup: muscleGroup
    };

    exercises.push(newExercise);

    res.status(201).json({
        mensaje: 'Ejercicio creado correctamente',
        exercise: newExercise
    });
});

module.exports = router;