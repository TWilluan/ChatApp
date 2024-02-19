import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        console.log(token);

        if (!token)
            // check if token is provided
            return res.status(401).json({ error: `Unauthorized - No Token Provided` });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded)
            // check if token is valid
            return res.status(401).json({ error: `Unauthorized - Token Invalid` });

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) 
            // check if user is in database
            return res.status(400).son({ error: `User not found` });
        
        req.user = user;
        
        next(); // call send() in messange.controller.js

    } catch (e) {
        console.log(`Error in protect route middleware: ${e}`);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
