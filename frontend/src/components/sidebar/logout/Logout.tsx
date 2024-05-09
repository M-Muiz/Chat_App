import { IoLogOut } from "react-icons/io5";
import useLogout from "../../../hooks/useLogout";
import toast from "react-hot-toast";


const Logout = () => {

  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <IoLogOut onClick={logout} className="w-6 h-6 cursor-pointer text-white" />

      ) : (
        toast.success("Logout successfully")
      )}
    </div>
  )
}

export default Logout
