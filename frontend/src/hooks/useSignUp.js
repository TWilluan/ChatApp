import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const { authUser, setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({
            // check if inputs is put in correctly
            fullName,
            username,
            password,
            confirmPassword,
            gender,
        });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("api/auth/signin", {
                // fetch backend signin
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    username,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            // send user to local storage
            localStorage.setItem("authUser", JSON.stringify(data));
            // update context
            setAuthUser(data);
        } catch (e) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup };
};

const handleInputErrors = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Password doesn't match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be longer than 6 charaters");
        return false;
    }

    return true;
};

export default useSignUp;
