import express from "express";
import { authenticate, authorize } from "../middleware/auth";

const router = express.Router();

// All admin routes require authentication and admin role
router.use(authenticate);
router.use(authorize("ADMIN", "SUPER_ADMIN"));

// GET /api/admin/users
router.get("/users", async (req, res) => {
  try {
    res.json({ success: true, data: { users: [] } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
