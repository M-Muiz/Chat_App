import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

const App = () => {

  const { authUser }: any = useAuthContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;
