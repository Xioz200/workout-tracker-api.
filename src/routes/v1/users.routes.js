const express = require('express');

const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    patchUser,
    deleteUser
} = require('../../controllers/users.controller');

// GET /users
router.get('/', getUsers);

// GET /users/:id
router.get('/:id', getUserById);

// POST /users
router.post('/', createUser);

// PUT /users/:id
router.put('/:id', updateUser);

// PATCH /users/:id
router.patch('/:id', patchUser);

// DELETE /users/:id
router.delete('/:id', deleteUser);

module.exports = router;