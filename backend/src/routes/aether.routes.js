const express = require("express");
const router = express.Router();

const {
  healthCheck,
  getCouncil,
  getArbiter
} = require("../controllers/aether.controller");

router.get("/health", healthCheck);
router.get("/council", getCouncil);
router.get("/arbiter", getArbiter);

module.exports = router;
