const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json([
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
    ]);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        id: id,
        name: 'Press de banca',
        muscleGroup: 'Pecho'
    });
});

module.exports = router;