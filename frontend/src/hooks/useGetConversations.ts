import  { useEffect, useState } from 'react'
import toast from "react-hot-toast"
const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);


    useEffect(() => {
        const getCoversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/user");
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
        getCoversations();
    }, [])

    return { loading, conversations }

};

export default useGetConversations
