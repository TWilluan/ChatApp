import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
    } catch (e) {
        console.log(`Error in protect route middleware: ${e}`);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;