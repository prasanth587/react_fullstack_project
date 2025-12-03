const express = require("express");
const { pool } = require("../db");

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ message: "pong from backend" });
});

router.post("/form1", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const sql = "INSERT INTO form1_submissions (name, email) VALUES (?, ?)";
    await pool.execute(sql, [name, email]);

    res.json({ message: "Form 1 data has been saved" });
  } catch (err) {
    console.error("Error in /api/form1:", err);
    res.status(500).json({ message: "Error saving form 1 data" });
  }
});

router.post("/form2", async (req, res) => {
  try {
    const { username, message } = req.body;
    if (!username || !message) {
      return res.status(400).json({ message: "Username and message are required" });
    }

    const sql = "INSERT INTO form2_submissions (username, message) VALUES (?, ?)";
    await pool.execute(sql, [username, message]);

    res.json({ message: "Form 2 data has been saved" });
  } catch (err) {
    console.error("Error in /api/form2:", err);
    res.status(500).json({ message: "Error saving form 2 data" });
  }
});

module.exports = router;
