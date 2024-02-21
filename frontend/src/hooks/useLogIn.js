import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { json } from "react-router-dom";

const useLogIn = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const sucess = handleInputErrors({ username, password });
        if (!sucess) return;
        
        setLoading(true);

        try {
            const res = await fetch("api/auth/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            localStorage.setItem("authUser", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            console.log("Error in use login");
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

const handleInputErrors = ({ username, password }) => {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
};

export default useLogIn;
