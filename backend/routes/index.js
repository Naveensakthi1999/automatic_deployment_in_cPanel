const express = require("express");
const router = express.Router();

// Sample API route
router.get("/", (req, res) => {
  res.json({ message: "Hello from Node.js Backend via routes!" });
});

// Another route example
router.get("/status", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

module.exports = router;
