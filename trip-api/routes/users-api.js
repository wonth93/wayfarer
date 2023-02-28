const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Show all users - to test if the database is connect to the server
router.get("/", (req, res) => {
  db.query(`SELECT * FROM users;`)
    .then((users) => {
      res.json(users.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    })
});

// User login
router.get("/login/:id", (req, res) => {
  res.cookie("user_id", req.params.id);
  res.end("Success")
});

// User logout
router.get("/logout", (req, res) => {
  res.clearCookie("user_id");
});

module.exports = router;
