import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            const res = await fetch("api/auth/logout", {
                method: "POST",
                headers: { "Content-type": "application/json" },
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            localStorage.removeItem("authUser");
            setAuthUser(null);
        } catch (e) {
            toast.error(e);
        } finally {
            setLoading(true);
        }
    };

    return { loading, logout };
};

export default useLogOut;