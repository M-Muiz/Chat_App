import { useState } from "react";
import useConversation from "../zustand/getConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation }: any = useConversation();

    const sendMessage = async (message: any) => {
        setLoading(true);

        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            const data: any = await res.json();
            console.log(data);
            if (data.error) throw new Error(data.error);

            await setMessages([...messages, data]);
            
        } catch (error: any) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
