import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignUp = async () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullname, username, passoword, confirmPassword, gender }) => {
        const success = handleInputErrors({
            fullname,
            username,
            passoword,
            confirmPassword,
            gender,
        });
        if (!success) return;
        
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    fullname,
                    username,
                    passoword,
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

const handleInputErrors = ({
    fullname,
    username,
    passoword,
    confirmPassword,
    gender,
}) => {
    if (!fullname || !username || !passoword || !confirmPassword || !gender) {
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
