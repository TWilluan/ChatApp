import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
    res.send("log in user");
    console.log("Login User");
};

export const logout = (req, res) => {
    console.log("Logout User");
};

export const signin = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // check password matching
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passoword doesn't match" });
        }

        // check if username exist
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exist" });
        }

        // hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

        // profile picture
        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePicture : girlProfilePicture,
        });

        if (newUser)
		{
			await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
		} else {
			res.status(400).json({error: "Invalid Data"});
		}
    } catch (e) {
        console.log(`Error in signup controller:`, e.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
