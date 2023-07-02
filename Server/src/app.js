import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

// connections
import { connectMssql, connectRedis } from "./connections/index.js";
import syncMssql from "./models/sync.js";

// routes
import { userRoute, invalidRoute } from "./routes/index.js";

//utils
import { SERVER_PORT, SERVER_HOST } from "./utils/index.js";
import { logger } from "./utils/index.js";

// others
const app = express();
const port = SERVER_PORT;

// middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(helmet());
app.use(morgan(":status :method :url :response-time ms"));

// routes

// check connection
app.post("/", async (req, res, next) => {
  next({ message: "Connection established" });
});

// handle valid routes
app.use("/user", userRoute);

// invalid routes
app.use(invalidRoute);

// server
function startServer() {
  logger.info("Starting server.....");
  logger.info(`Server Listening on ${SERVER_HOST}: ${port}`);
  connectMssql();
  syncMssql();
  // connectRedis();
}

app.listen(port, () => {
  startServer();
});
