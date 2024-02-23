

import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {

    const [socketGlobal, setSocketGlobal] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState(null);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("https://chatapp-rsld.onrender.com", {
                query: {
                    userId: authUser._id,
                }
            });

            setSocketGlobal(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        } else {
            if (socketGlobal)
                socketGlobal.close();
        }
    }, [authUser])

    return (<SocketContext.Provider value={{ socketGlobal, onlineUsers }}>
        {children}
    </SocketContext.Provider>);
}