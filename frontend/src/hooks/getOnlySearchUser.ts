import { useState } from "react";

const getOnlySearchUser = async ({ searchValue }: String) => {


    const [loadinn, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    try {
        const res = await fetch(`/api/user/search_users${searchValue}`);
        const data = await res.json();
        if (data.status === 400) {
            return console.log("user not found")
        }
    } catch (error) {

    }

}

export default getOnlySearchUser
