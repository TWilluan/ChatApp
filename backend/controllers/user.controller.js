import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
    try {
        const loginUserId = req.user._id;
        const filterdUser = await User.find({
            _id: { $ne: loginUserId },
        });

        res.status(200).json(filterdUser);

    } catch (e) {
        console.log(`Error in user controller: ${e}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
