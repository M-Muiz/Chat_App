import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login</h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className='text-sm label-text'>Email</span>
                        </label>
                        <input type="text" placeholder='user@gmail.com' id="" className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className="label">
                            <span className='text-sm label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='***********' id="" className='w-full input input-bordered h-10' />
                    </div>

                    <div className="mt-2">
                        <h5 className='text-sm'>Al'ready have an account <span className='text-blue-500 cursor-pointer hover:underline'>Login</span></h5>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
