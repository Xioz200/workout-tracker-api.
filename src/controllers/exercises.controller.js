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

// GET /exercises
const getExercises = (req, res) => {
    res.status(200).json(exercises);
};

// GET /exercises/:id
const getExerciseById = (req, res) => {
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
};

// POST /exercises
const createExercise = (req, res) => {
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
};

// PUT /exercises/:id
const updateExercise = (req, res) => {
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

    const { name, muscleGroup } = req.body;

    if (!name || !muscleGroup) {
        return res.status(400).json({
            error: 'Para PUT se requiere name y muscleGroup'
        });
    }

    exercise.name = name;
    exercise.muscleGroup = muscleGroup;

    res.status(200).json({
        mensaje: 'Ejercicio actualizado correctamente',
        exercise: exercise
    });
};

// PATCH /exercises/:id
const patchExercise = (req, res) => {
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

    const { name, muscleGroup } = req.body;

    if (!name && !muscleGroup) {
        return res.status(400).json({
            error: 'Debe enviar al menos un campo para actualizar'
        });
    }

    if (name) {
        exercise.name = name;
    }

    if (muscleGroup) {
        exercise.muscleGroup = muscleGroup;
    }

    res.status(200).json({
        mensaje: 'Ejercicio actualizado correctamente',
        exercise: exercise
    });
};

// DELETE /exercises/:id
const deleteExercise = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const index = exercises.findIndex(exercise => exercise.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Ejercicio no encontrado'
        });
    }

    exercises.splice(index, 1);

    res.status(204).send();
};

module.exports = {
    getExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    patchExercise,
    deleteExercise
};