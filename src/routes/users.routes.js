const express = require('express');

const router = express.Router();

const users = [
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
];

// GET /users
router.get('/', (req, res) => {
    res.status(200).json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            error: 'Usuario no encontrado'
        });
    }

    res.status(200).json(user);
});

// POST /users
router.post('/', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'El nombre y el email son obligatorios'
        });
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);

    res.status(201).json({
        mensaje: 'Usuario creado correctamente',
        user: newUser
    });
});

module.exports = router;