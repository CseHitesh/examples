import { Router } from "express";



const router = Router();

/**
 * @swagger
 * tags:
 *   name: Health Check22
 *   description: Health checkup for the API
 */

/**
 * @swagger
 * /register:
 *   get:
 *     summary: Perform a health check
 *     tags: [Health Check22]
 *     responses:
 *       '200':
 *         description: API is healthy
 */

router.route("/register").post(userRegisterValidator(), validate, registerUser);



export default router;
