const express = require("express");
const cors = require("cors");

const aetherRoutes = require("./routes/aether.routes");

const app = express();
const PORT = process.env.PORT || 5000;   // ✅ FIX

app.use(cors());
app.use(express.json());

app.use("/api/aether", aetherRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AETHER AI Backend is running"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);

  if (process.env.RENDER) {
    console.log("🌐 Running in Render deployment environment");
  } else {
    console.log("💻 Running in local development environment");
  }
});
