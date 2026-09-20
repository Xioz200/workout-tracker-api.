const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Miguel', email: 'miguel@email.com' },
    { id: 2, name: 'Carlos', email: 'carlos@email.com' }
];

// GET: Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json(users);
});

// GET: Obtener usuario por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        return res.status(400).json({
            error: 'El ID debe ser un número entero positivo'
        });
    }

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);
});

// POST: Crear nuevo usuario
router.post('/', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'name y email son obligatorios' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;