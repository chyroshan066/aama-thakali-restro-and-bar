const app = require("./app");
const { pool } = require("./config/db");

let isConnected = false;

async function connectToPostgres() {
  try {
    // Verify database connection on startup for easier debugging
    await pool.query("SELECT 1");
    isConnected = true;
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    isConnected = false;
    throw err;
  }
}

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectToPostgres();
    } catch (err) {
      return res.status(503).json({ error: "Database unavailable" });
    }
  }
  next();
});

//don't use app.listen() in vercel.json
module.exports = app;
