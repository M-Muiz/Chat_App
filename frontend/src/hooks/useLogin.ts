import { useState } from "react";
import toast from "react-hot-toast";
import { loginUserTypes } from "../types";
import { useAuthContext } from "../context/AuthContext";


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser }: any = useAuthContext();

    const login = async ({ email, password }: loginUserTypes) => {
        const success = handleInputErrors({ email, password });
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data)


            if (data.status === false) {
                console.log(data)
                throw new Error(data.message);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }
    return { loading, login };

};

export default useLogin;


function handleInputErrors({ email, password }: loginUserTypes) {
    if (!email || !password) {
        toast.error("Please fill al fields");
        return false;
    }

    return true;
};