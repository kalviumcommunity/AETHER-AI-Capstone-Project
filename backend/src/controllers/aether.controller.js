exports.healthCheck = (req, res) => {
  res.json({
    status: "healthy",
    service: "AETHER AI Backend"
  });
};

exports.getCouncil = (req, res) => {
  res.json({
    council: "Aether Council",
    models: [
      "ChatGPT",
      "Gemini",
      "Claude",
      "Copilot",
      "Perplexity"
    ]
  });
};

exports.getArbiter = (req, res) => {
  res.json({
    arbiter: "Aether Arbiter",
    state: "active",
    role: "Final decision maker"
  });
};
