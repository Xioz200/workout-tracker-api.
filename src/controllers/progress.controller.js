const progress = [
    {
        id: 1,
        userId: 1,
        workoutId: 1,
        weight: 70,
        repetitions: 10,
        date: '2026-09-20'
    },
    {
        id: 2,
        userId: 2,
        workoutId: 2,
        weight: 80,
        repetitions: 8,
        date: '2026-09-21'
    }
];

// GET /progress
const getProgress = (req, res) => {
    res.status(200).json(progress);
};

// GET /progress/:id
const getProgressById = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const record = progress.find(item => item.id === id);

    if (!record) {
        return res.status(404).json({
            error: 'Registro de progreso no encontrado'
        });
    }

    res.status(200).json(record);
};

// POST /progress
const createProgress = (req, res) => {
    const {
        userId,
        workoutId,
        weight,
        repetitions,
        date
    } = req.body;

    if (
        !userId ||
        !workoutId ||
        weight === undefined ||
        !repetitions ||
        !date
    ) {
        return res.status(400).json({
            error: 'userId, workoutId, weight, repetitions y date son obligatorios'
        });
    }

    const newProgress = {
        id: progress.length + 1,
        userId,
        workoutId,
        weight,
        repetitions,
        date
    };

    progress.push(newProgress);

    res.status(201).json({
        mensaje: 'Registro de progreso creado correctamente',
        progress: newProgress
    });
};

// PUT /progress/:id
const updateProgress = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const record = progress.find(item => item.id === id);

    if (!record) {
        return res.status(404).json({
            error: 'Registro de progreso no encontrado'
        });
    }

    const {
        userId,
        workoutId,
        weight,
        repetitions,
        date
    } = req.body;

    if (
        !userId ||
        !workoutId ||
        weight === undefined ||
        !repetitions ||
        !date
    ) {
        return res.status(400).json({
            error: 'Para PUT todos los campos son obligatorios'
        });
    }

    record.userId = userId;
    record.workoutId = workoutId;
    record.weight = weight;
    record.repetitions = repetitions;
    record.date = date;

    res.status(200).json({
        mensaje: 'Registro de progreso actualizado correctamente',
        progress: record
    });
};

// PATCH /progress/:id
const patchProgress = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const record = progress.find(item => item.id === id);

    if (!record) {
        return res.status(404).json({
            error: 'Registro de progreso no encontrado'
        });
    }

    const {
        userId,
        workoutId,
        weight,
        repetitions,
        date
    } = req.body;

    if (
        userId === undefined &&
        workoutId === undefined &&
        weight === undefined &&
        repetitions === undefined &&
        date === undefined
    ) {
        return res.status(400).json({
            error: 'Debe enviar al menos un campo para actualizar'
        });
    }

    if (userId !== undefined) record.userId = userId;
    if (workoutId !== undefined) record.workoutId = workoutId;
    if (weight !== undefined) record.weight = weight;
    if (repetitions !== undefined) record.repetitions = repetitions;
    if (date !== undefined) record.date = date;

    res.status(200).json({
        mensaje: 'Registro de progreso actualizado correctamente',
        progress: record
    });
};

// DELETE /progress/:id
const deleteProgress = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const index = progress.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Registro de progreso no encontrado'
        });
    }

    progress.splice(index, 1);

    res.status(204).send();
};

module.exports = {
    getProgress,
    getProgressById,
    createProgress,
    updateProgress,
    patchProgress,
    deleteProgress
};