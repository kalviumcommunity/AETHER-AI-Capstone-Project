// This folder is for Business Logic and to check the health status of the API's that's being called 

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

// POST: Submit a task to AETHER AI
exports.submitTask = (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({
      error: "Task is required"
    });
  }

  res.status(201).json({
    message: "Task submitted successfully",
    task,
    status: "Sent to Aether Council"
  });
};

// POST: Arbiter decision simulation
exports.arbiterDecision = (req, res) => {
  const { taskId } = req.body;

  if (!taskId) {
    return res.status(400).json({
      error: "taskId is required"
    });
  }

  res.json({
    taskId,
    decision: "approved",
    confidence: "high"
  });
};

// PUT: Update task status
exports.updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      error: "status is required"
    });
  }

  res.json({
    taskId: id,
    updatedStatus: status,
    message: "Task status updated successfully"
  });
};

// PUT: Update arbiter decision
exports.updateDecision = (req, res) => {
  const { id } = req.params;
  const { decision } = req.body;

  if (!decision) {
    return res.status(400).json({
      error: "decision is required"
    });
  }

  res.json({
    decisionId: id,
    updatedDecision: decision,
    message: "Arbiter decision updated successfully"
  });
};
