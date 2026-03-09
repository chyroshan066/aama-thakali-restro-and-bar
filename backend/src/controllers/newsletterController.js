const { subscribeEmail } = require('../models/newsletterModel');
const { pool } = require('../config/db');

async function handleSubscription(req, res, next) {
  try {
    const { email } = req.body;

    // 1. Basic Validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        message: "Please provide a valid email address." 
      });
    }

    // 2. Call the Model to insert into pgAdmin/Neon
    const subscription = await subscribeEmail(email);

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to the newsletter!",
      data: subscription
    });

  } catch (err) {
    // 3. Handle Duplicate Email Error (PostgreSQL error code 23505)
    if (err.code === '23505') {
      return res.status(409).json({ 
        message: "This email is already subscribed." 
      });
    }
    
    next(err);
  }
}

// This handles the GET (Admin viewing the list)
const getSubscribers = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, email, subscribed_at FROM newsletter_subscriptions ORDER BY subscribed_at DESC'
        );
        res.status(200).json({ data: result.rows });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Failed to fetch registry records" });
    }
};

module.exports = { handleSubscription , getSubscribers

};