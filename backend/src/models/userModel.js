const bcrypt = require('bcrypt');
const { pool } = require('../config/db');

const SALT_ROUNDS = 10;

async function createUser({ name, email, password, phoneNo, role = 'customer' }) {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const query = `
    INSERT INTO users (name, email, password_hash, phone_no, role)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, email, phone_no, role, created_at;
  `;
  const values = [name, email.toLowerCase(), hashedPassword, phoneNo, role];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function findUserByEmail(email) {
  const { rows } = await pool.query(
    'SELECT id, name, email, phone_no, password_hash, role FROM users WHERE email = $1',
    [email.toLowerCase()]
  );
  return rows[0] || null;
}

async function findUserById(id) {
  const { rows } = await pool.query(
    'SELECT id, name, email, phone_no, role, created_at FROM users WHERE id = $1',
    [id]
  );
  return rows[0] || null;
}

async function getAllUsers() {
  const result = await pool.query(`
    SELECT id, name, email, phone_no, role, created_at
    FROM users
    ORDER BY created_at DESC
  `);

  return result.rows;
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers
};

