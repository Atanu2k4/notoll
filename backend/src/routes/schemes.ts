import express from "express";
import { authenticate } from "../middleware/auth";

const router = express.Router();
router.use(authenticate);

// GET /api/schemes
router.get("/", async (req, res) => {
  try {
    res.json({ success: true, data: { schemes: [] } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
