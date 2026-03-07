const app = require("./app");
const { pool } = require("./config/db");

let isConnected = false;

async function connectToPostgres() {
  try {
    await pool.query("SELECT 1");
    isConnected = true;
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    isConnected = false;
    throw err;
  }
}

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  // Skip OPTIONS requests (preflight) to avoid 405
  if (req.method === 'OPTIONS') return res.sendStatus(200);

  if (!isConnected) {
    try {
      await connectToPostgres();
    } catch (err) {
      return res.status(503).json({ error: "Database unavailable" });
    }
  }
  next();
});

// Don't use app.listen() on Vercel
module.exports = app;