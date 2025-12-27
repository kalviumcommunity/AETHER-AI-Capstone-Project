const express = require("express");
const router = express.Router();

const {
  healthCheck,
  getCouncil,
  getArbiter,
  submitTask,
  arbiterDecision,
  updateTaskStatus,
  updateDecision
} = require("../controllers/aether.controller");

router.get("/health", healthCheck);
router.get("/council", getCouncil);
router.get("/arbiter", getArbiter);
router.post("/task", submitTask);
router.post("/decision", arbiterDecision);
router.put("/task/:id", updateTaskStatus);
router.put("/decision/:id", updateDecision);

module.exports = router;
