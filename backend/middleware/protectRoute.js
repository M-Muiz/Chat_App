import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        // console.log(token)
        if (!token) {
            return res.status(401).send({ message: "Unathorized" });
        };
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.status(401).send({ message: "Invalid Token" });
        };
        const user = await User.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(401).send({ message: "User not found" });
        }
        req.user = user;

        next();
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};

export default protectRoute;