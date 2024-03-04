import User from "../models/User.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        return res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};