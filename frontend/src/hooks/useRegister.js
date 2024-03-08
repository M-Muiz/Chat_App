import React, { useState } from 'react'

const useRegister = () => {
    const [loading, setLoading] = useState(false);

    const register = async ({ username, email, password }) => {
        const success = handleInputErrors({ username, email, password });
        if (!success) return;
        setLoading(true);
        try {
            // const res = await fetch("http://localhost:9000/api/user/register");
            console.log("working peoperly")

        } catch (error) {
            setLoading(false);
            toast.error(error.message)
        }

        return { loading, signup };

    }
}

export default useRegister


function handleInputErrors({ username, email, password }) {
    if (!username || !email || !password) {
        toast.error("Please fill al fields");
        return false;
    }
    if (password.lenth < 6) {
        toast.error("Password must be atleast 6 characters");
        return false;
    }

    return true;
}