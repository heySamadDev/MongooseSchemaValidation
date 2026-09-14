const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "../data");
const logFilePath = path.join(logDir, "server.log");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, "");
}

const logRequest = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} - ${req.url} - IP: ${req.ip}\n`;

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.error("Failed to write log:", err.message);
      return next();
    }

    console.log(log.trim());
    next();
  });
};

module.exports = logRequest;
