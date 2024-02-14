

import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SCERET, {
        expiresIn: '15d'
    });

    res.cookie("jwt_token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // in milisecond format
        httpOnly: true, // prevent XSS attacks (aka cross-site scripting attacks)
        sameSite: "strict", // prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndSetCookie;