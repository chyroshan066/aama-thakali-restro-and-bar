const { pool } = require('../config/db');

async function subscribeEmail(email) {
    const query = `
        INSERT INTO newsletter_subscriptions (email) 
        VALUES ($1) 
        RETURNING *;
    `;
    const { rows } = await pool.query(query, [email]);
    return rows[0];
}

module.exports = { subscribeEmail };