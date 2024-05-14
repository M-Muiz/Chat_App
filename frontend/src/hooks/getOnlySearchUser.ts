import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetOnlyConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);


    useEffect(() => {
        const getUsers = async (searchVlaue: string) => {
            setLoading(true);
            try {
                const res = await fetch(`/api/user/search_users/${searchVlaue}`);
                const data = await res.json();
                if (data.message) {
                    throw new Error(data.message);
                }
                setConversations(data);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, [])

    return { loading, conversations }

};

export default useGetOnlyConversations;
