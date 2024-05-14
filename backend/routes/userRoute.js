import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getUserByName, getUsersForSidebar } from "../controller/userController.js";


const router = express.Router()

router.get("/", protectRoute, getUsersForSidebar)
router.get("/search_users", protectRoute, getUserByName)

export { router as userRoutes };