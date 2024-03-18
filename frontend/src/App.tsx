import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

const App = () => {

  const { authUser }: any = useAuthContext();
  console.log(authUser)

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
