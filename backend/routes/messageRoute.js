import express from "express";
import { sendMessage } from "../controller/messageController.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router()


router.post("/send/:id", protectRoute, sendMessage);



export { router as messageRoute };