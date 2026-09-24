const express = require('express');

const router = express.Router();

const {
    getExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    patchExercise,
    deleteExercise
} = require('../../controllers/exercises.controller');

// GET /exercises
router.get('/', getExercises);

// GET /exercises/:id
router.get('/:id', getExerciseById);

// POST /exercises
router.post('/', createExercise);

// PUT /exercises/:id
router.put('/:id', updateExercise);

// PATCH /exercises/:id
router.patch('/:id', patchExercise);

// DELETE /exercises/:id
router.delete('/:id', deleteExercise);

module.exports = router;