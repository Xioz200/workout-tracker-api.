const express = require('express');

const router = express.Router();

// GET - Obtener todos los usuarios
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

// POST - Crear un usuario
router.post('/', (req, res) => {
    const { name, email } = req.body;

    // Validar los datos recibidos
    if (!name || !email) {
        return res.status(400).json({
            error: 'El nombre y el correo son obligatorios'
        });
    }

    // Crear usuario de prueba
    const newUser = {
        id: 3,
        name: name,
        email: email
    };

    res.status(201).json({
        mensaje: 'Usuario creado correctamente',
        usuario: newUser
    });
}); 

// GET - Obtener un usuario por ID
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