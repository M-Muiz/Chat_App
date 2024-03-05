import React from 'react'
import CheckBox from './CheckBox'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

        <h1 className='text-3xl font-semibold text-center text-gray-300'>Register</h1>
        <form>
          <div>
            <label className="label p-2">
              <span className='text-sm label-text'>Username</span>
            </label>
            <input type="text" placeholder='Username' id="" className='w-full input input-bordered h-10 tracking-wider text-sm' />
          </div>

          <div>
            <label className="label p-2">
              <span className='text-sm label-text'>Email</span>
            </label>
            <input type="text" placeholder='email' id="" className='w-full input input-bordered h-10 text-sm tracking-wider' />
          </div>

          <div>
            <label className="label">
              <span className='text-sm label-text'>Password</span>
            </label>
            <input type="password" placeholder='***********' id="" className='w-full input input-bordered h-10 tracking-wider text-sm' />
          </div>

          <CheckBox />

          <div className="my-1">
            <h5 className='text-sm'>Al'ready have an account <span className='text-blue-500 cursor-pointer hover:underline'>Login</span></h5>
          </div>


          <div>
            <button className='btn btn-block btn-sm mt-2 border border-blue-600/40'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
