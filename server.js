require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Port from .env or default 3000
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// -------------------------------
// Connect to MongoDB Atlas
// -------------------------------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// -------------------------------
// Movie Schema & Model
// -------------------------------
const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    director: { type: String },
    year: { type: Number },
    rating: { type: Number }
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

// -------------------------------
// ROUTES (CRUD)
// -------------------------------

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// GET all movies
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// GET one movie by ID
app.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: "Invalid movie id" });
  }
});

// POST create movie
app.post("/api/movies", async (req, res) => {
  try {
    const { title, director, year, rating } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const movie = new Movie({ title, director, year, rating });
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json({ error: "Failed to create movie" });
  }
});

// PUT update movie
app.put("/api/movies/:id", async (req, res) => {
  try {
    const { title, director, year, rating } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { title, director, year, rating },
      { new: true, runValidators: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ error: "Failed to update movie" });
  }
});

// DELETE movie
app.delete("/api/movies/:id", async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete movie" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API listening on http://localhost:${PORT}`);
});
