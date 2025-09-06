import express from "express";
import { authenticate } from "../middleware/auth";

const router = express.Router();
router.use(authenticate);

// GET /api/pitches
router.get("/", async (req, res) => {
  try {
    res.json({ success: true, data: { pitches: [] } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// POST /api/pitches
router.post("/", async (req, res) => {
  try {
    res.json({ success: true, message: "Pitch created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
