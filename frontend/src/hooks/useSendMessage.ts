import { useState } from "react";
import useConversation from "../zustand/getConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { message, setMessage, selectedConversation }: any = useConversation();


    const sendMessage = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            })

            const data = await res.json();

            console.log(data)

            if (data.error) throw new Error(data.error)


            setMessage([...message, data.message])

            return { sendMessage, loading }

        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };




};

export default useSendMessage();