import { useState } from "react";
import toast from "react-hot-toast";
import { registerUserTypes } from "../types";


const useRegister = () => {
    const [loading, setLoading] = useState(false);

    const register = async ({ username, email, password, gender }: registerUserTypes) => {
        console.log(username, email, password, gender)
        const success = handleInputErrors({ username, email, password, gender });
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, gender }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }
    return { loading, register };

};

export default useRegister;


function handleInputErrors({ username, email, password }: registerUserTypes) {
    if (!username || !email || !password) {
        toast.error("Please fill al fields");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters");
        return false;
    }

    return true;
};