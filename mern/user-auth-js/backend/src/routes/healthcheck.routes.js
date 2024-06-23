import { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.controllers.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Health Check
 *   description: Health checkup for the API
 */

/**
 * @swagger
 * /healthcheck:
 *   get:
 *     summary: Perform a health check
 *     tags: [Health Check]
 *     responses:
 *       '200':
 *         description: API is healthy
 */

router.route("/").get(healthcheck);

export default router;
