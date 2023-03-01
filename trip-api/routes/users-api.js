const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/userQueries");

// Show all users - to test if the database is connect to the server
router.get("/", (req, res) => {
  userQueries
    .getAllUsers()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// User login
router.get("/login/:id", (req, res) => {
  res.cookie("user_id", req.params.id);
  res.end("Success");
});

// User logout
router.get("/logout", (req, res) => {
  res.clearCookie("user_id");
});

module.exports = router;
