import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
        });

        setLoading(true);
        try {
            const res = await fetch("api/auth/signin", {
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
            console.log(data);
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
};

export default useSignUp;
