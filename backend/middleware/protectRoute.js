import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if (!token)
        {
            return res.status(401).json({error: `Unauthorized - No Token Provided`});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded)
        {
            return res.status(401).json({error: `Unauthorized - Token Invalid`});
        }

        

    } catch (e) {
        console.log(`Error in protect route middleware: ${e}`);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;