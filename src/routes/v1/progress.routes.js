const express = require('express');

const router = express.Router();

const {
    getProgress,
    getProgressById,
    createProgress,
    updateProgress,
    patchProgress,
    deleteProgress
} = require('../../controllers/progress.controller');

// GET /progress
router.get('/', getProgress);

// GET /progress/:id
router.get('/:id', getProgressById);

// POST /progress
router.post('/', createProgress);

// PUT /progress/:id
router.put('/:id', updateProgress);

// PATCH /progress/:id
router.patch('/:id', patchProgress);

// DELETE /progress/:id
router.delete('/:id', deleteProgress);

module.exports = router;