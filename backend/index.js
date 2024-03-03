import express from "express";
import { configDotenv } from "dotenv";
import { authRoutes } from "./routes/authRoute.js";
import { connectToMongoDB } from "./db/index.js";
import cookieParser from "cookie-parser";
import { messageRoute } from "./routes/messageRoute.js";
configDotenv()

const app = express()
const PORT = process.env.PORT || 7000;


app.get("/", (req, res) => {
    res.status(200).send("Hello World")
});

app.use(express.json())
app.use(cookieParser())
app.use("/api/user", authRoutes)
app.use("/api/messages", messageRoute)


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port on ${PORT}`)
});