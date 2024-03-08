import React, { useState } from 'react'

const useRegister = () => {
    const [loading, setLoading] = useState(false);

    const register = async ({ username, email, password }) => {
        const success = handleInputErrors({ username, email, password });
        if (!success) return;
        try {

        } catch (error) {
            toast.error(error.message)
        }
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