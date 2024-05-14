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


export const getUserByName = async (req, res) => {
    try {
        const { searchValue } = req.body;
        const users = await User.find({ username: { $regex: searchValue, $options: "i" } }).select("-password");
        console.log(users)
        if (!users) {
            return res.status(400).send("User not found");
        }
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};