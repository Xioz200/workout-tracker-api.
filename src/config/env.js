require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,

    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'workout_tracker'
    }
};