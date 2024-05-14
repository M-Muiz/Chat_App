import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {

    const { login, loading } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await login({ email, password });
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-white rounded-md p-6 py-2'>
            <div className="w-full rounded-lg py-8">

                <h1 className='text-3xl font-semibold text-center text-[#536dfe]'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="py-3">
                        <label className="label">
                            <span className='text-sm text-black font-semibold'>Email</span>
                        </label>
                        <input type="text" placeholder='user@gmail.com' id="" className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label className="label">

                            <span className='text-sm text-black font-semibold'>Password</span>
                        </label>
                        <input type="password" placeholder='***********' id="" className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mt-3">
                        <h5 className='text-xs text-black font-semibold'>Don't have an account
                            <Link to="/register">
                                <span className='text-blue-500 cursor-pointer hover:underline pl-2'>Register Here</span>
                            </Link>
                        </h5>
                    </div>

                    <button className='h-10 bg-[#536dfe] w-full text-white mt-2 rounded-md'>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
