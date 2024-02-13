
export const loginUser = (req, res) => {
    res.send("log in user");
    console.log("Login User");
}

export const logoutUser = (req, res) => {
    console.log("Logout User");
}

export const signinUser = async(req, res) => {
    try {
        const {fullname, username, password, confirmPassword, genger} = req.body;
    } catch (error) {

    }
}