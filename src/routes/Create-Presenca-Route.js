import express from "express";
// import { StatusController } from "../controllers/statusController.js";
import { CreatePresencaMiddleware } from "../middlewares/Create-Presenca-Middleware.js";
import { CreatePresencaController } from "../controllers/Create-Pessoa-Controller.js";

const router = express.Router();

router.post(
  "/presenca",
  new CreatePresencaMiddleware().handle,
  new CreatePresencaController().handle
);

export default router;
