import express from "express";
import { authenticate } from "../middleware/auth";

const router = express.Router();

// All buyer routes require authentication
router.use(authenticate);

// GET /api/buyers
router.get("/", async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        buyers: [
          {
            id: "1",
            name: "Ocean Foods Ltd",
            country: "USA",
            sector: "SEAFOOD",
            importVolume: 1000,
            contactEmail: "buyer@oceanfoods.com",
          },
        ],
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// POST /api/buyers/save
router.post("/save", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Buyer saved successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
