const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
const winston = require("winston");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8090;
const MONGO_URI = process.env.MONGO_URI;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

/* Logger */

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()]
});

/* MongoDB Connection */

mongoose
  .connect(MONGO_URI)
  .then(() => logger.info("MongoDB connected"))
  .catch((err) => logger.error(err));

/* Redis Connection */

const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

redisClient.connect();

redisClient.on("connect", () => {
  logger.info("Redis connected");
});

/* Routes */

app.get("/", (req, res) => {
  res.json({
    message: "Node.js DevOps Application Running "
  });
});

app.get("/health", async (req, res) => {

  const mongoStatus =
    mongoose.connection.readyState === 1 ? "UP" : "DOWN";

  let redisStatus = "DOWN";

  try {
    await redisClient.ping();
    redisStatus = "UP";
  } catch {}

  res.json({
    status: "OK",
    mongo: mongoStatus,
    redis: redisStatus
  });
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});