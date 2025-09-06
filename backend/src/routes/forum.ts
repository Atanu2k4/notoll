import express from "express";
import { authenticate } from "../middleware/auth";

const router = express.Router();
router.use(authenticate);

// GET /api/forum/posts
router.get("/posts", async (req, res) => {
  try {
    res.json({ success: true, data: { posts: [] } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
