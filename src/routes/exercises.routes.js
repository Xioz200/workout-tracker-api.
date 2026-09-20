const express = require('express');
const router = express.Router();

let exercises = [
    { id: 1, name: 'Press de banca', muscleGroup: 'Pecho' },
    { id: 2, name: 'Sentadilla', muscleGroup: 'Piernas' }
];

// GET: Todos los ejercicios
router.get('/', (req, res) => {
    res.json(exercises);
});

// GET: Ejercicio por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const exercise = exercises.find(e => e.id === id);

    if (!exercise) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.json(exercise);
});

// POST: Crear un ejercicio
router.post('/', (req, res) => {
    const { name, muscleGroup } = req.body;

    if (!name || !muscleGroup) {
        return res.status(400).json({ error: 'name y muscleGroup son obligatorios' });
    }

    const newExercise = {
        id: exercises.length + 1,
        name,
        muscleGroup
    };

    exercises.push(newExercise);
    res.status(201).json(newExercise);
});

module.exports = router;