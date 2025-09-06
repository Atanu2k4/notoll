import express from "express";
import { authenticate } from "../middleware/auth";

const router = express.Router();
router.use(authenticate);

// GET /api/compliance
router.get("/", async (req, res) => {
  try {
    res.json({ success: true, data: { compliance: [] } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
