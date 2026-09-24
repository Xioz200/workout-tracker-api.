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
const getWorkouts = (req, res) => {
    const limit = parseInt(req.query.limit);
    const name = req.query.name;

    let result = workouts;

    // Filtrar por nombre
    if (name) {
        result = result.filter(workout =>
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

        result = result.slice(0, limit);
    }

    res.status(200).json(result);
};

// GET /workouts/:id
const getWorkoutById = (req, res) => {
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
};

// POST /workouts
const createWorkout = (req, res) => {
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
};

// PUT /workouts/:id
const updateWorkout = (req, res) => {
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

    const { name, userId } = req.body;

    if (!name || !userId) {
        return res.status(400).json({
            error: 'Para PUT se requiere name y userId'
        });
    }

    workout.name = name;
    workout.userId = userId;

    res.status(200).json({
        mensaje: 'Workout actualizado correctamente',
        workout: workout
    });
};

// PATCH /workouts/:id
const patchWorkout = (req, res) => {
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

    const { name, userId } = req.body;

    if (!name && !userId) {
        return res.status(400).json({
            error: 'Debe enviar al menos un campo para actualizar'
        });
    }

    if (name) {
        workout.name = name;
    }

    if (userId) {
        workout.userId = userId;
    }

    res.status(200).json({
        mensaje: 'Workout actualizado correctamente',
        workout: workout
    });
};

// DELETE /workouts/:id
const deleteWorkout = (req, res) => {
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
};

module.exports = {
    getWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    patchWorkout,
    deleteWorkout
};