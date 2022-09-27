import express from "express";
import ClientController from "../services/client.service.js";

const router = express.Router();

router.post("/", ClientController.createClient); //o que chegar no post / vai cair no createClient

export default router;