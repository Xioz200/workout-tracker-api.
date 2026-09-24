const express = require('express');

const router = express.Router();

const {
    getWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    patchWorkout,
    deleteWorkout
} = require('../../controllers/workouts.controller');

// GET /workouts
router.get('/', getWorkouts);

// GET /workouts/:id
router.get('/:id', getWorkoutById);

// POST /workouts
router.post('/', createWorkout);

// PUT /workouts/:id
router.put('/:id', updateWorkout);

// PATCH /workouts/:id
router.patch('/:id', patchWorkout);

// DELETE /workouts/:id
router.delete('/:id', deleteWorkout);

module.exports = router;