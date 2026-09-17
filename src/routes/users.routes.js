const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Miguel',
            email: 'miguel@email.com'
        },
        {
            id: 2,
            name: 'Carlos',
            email: 'carlos@email.com'
        }
    ]);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    res.json({
        id: id,
        name: 'Miguel',
        email: 'miguel@email.com'
    });
});

module.exports = router;