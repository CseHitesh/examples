import YAML from "yaml";
import cors from "cors";
import { createServer } from "http";
import { errorHandler } from "../middlewares/error.middleware.js";
import express from "express";
import { fileURLToPath } from "url";
import fs from "fs";

import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const file = fs.readFileSync(path.resolve(__dirname, "../swagger/swagger.yaml"), "utf8");
// const swaggerDocument = YAML.parse(file);

const SWAGGER_JS_DOC_OPTIONS = {
  swaggerDefinition: {
    info: {
      title: "Hifi Api Adda",
      version: "1.0.0",
      description: "Description of your API",
    },
    servers: [
      {
        url: "http://localhost:3000", // Replace with your server's URL
        description: "Local server",
      },
    ],
  },
  apis: [
    path.resolve(__dirname, "../routes/**/*.js"), // Include all .js files recursively
  ],
};

const swaggerDocument = swaggerJsdoc(SWAGGER_JS_DOC_OPTIONS);
const app = express();

const httpServer = createServer(app);

// global middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import healthcheckRouter from "../routes/healthcheck.routes.js";
import userRouter from "../routes/user.routes.js";

// api routes

app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);

// * API DOCS
// ? Keeping swagger code at the end so that we can load swagger on "/" route
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      docExpansion: "none", // keep all the sections collapsed by default
    },
    customSiteTitle: "FreeAPI docs",
  })
);

// common error handling middleware
app.use(errorHandler);

export { httpServer };
