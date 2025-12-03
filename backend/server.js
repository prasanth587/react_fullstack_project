const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const apiRouter = require("./routes/api");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", apiRouter);

// ===== Serve React (Vite) build =====


// Serve static files


// For any non-API route, send index.html

// ====================================

app.get("/health", (req, res) => {
  res.json({ status: "ok", env: process.env.NODE_ENV || "development" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
