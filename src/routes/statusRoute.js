import express from "express";
import { StatusController } from "../controllers/statusController.js";

const router = express.Router();

router.get('/status', new StatusController().handle)

export default router;