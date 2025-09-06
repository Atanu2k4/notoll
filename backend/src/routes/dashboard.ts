import express from "express";
import { authenticate } from "../middleware/auth";

const router = express.Router();

// All dashboard routes require authentication
router.use(authenticate);

// GET /api/dashboard/metrics
router.get("/metrics", async (req, res) => {
  try {
    // Placeholder implementation
    res.json({
      success: true,
      data: {
        tariffWatch: { changes: 3, trend: "up" },
        buyerMatches: { count: 12, new: 4 },
        complianceScore: 85,
        reliefSchemes: { available: 5, eligible: 3 },
        impactSummary: { revenue: 50000, pitches: 8 },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
