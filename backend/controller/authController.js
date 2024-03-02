import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { generateTokenSetCookie } from "../utils/token.js"

export const register = async (req, res) => {
    try {
        const { username, email, password, gender } = req.body;

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).send({ message: "Username already exists" });
        }

        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return res.status(400).send({ message: "Email is already Registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).send({
                _id: newUser._id,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).send({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(401).send({ message: "Wrong credentials" });
        }
        generateTokenSetCookie(user._id, res)
        res.status(200).send({ message: "Login Successfully", user })

    } catch (error) {
        res.status(500).send("something went wrong");
    }
};


export const logout = async (req, res) => {
    try {
        res.cookie("access_token", "", { maxAge: 0 });
        res.status(200).send("logout successfully");
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};