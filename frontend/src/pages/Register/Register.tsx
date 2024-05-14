import { useState } from 'react'
import CheckBox from './CheckBox'
import useRegister from "../../hooks/useRegister"
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    gender: ""
  });

  // const genderChange = (gender: string) => {
  //   setInputs({ ...inputs, gender })
  // };

  const { loading, register }: any = useRegister();



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await register(inputs)
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-white rounded-md p-6 py-2'>
      <div className="w-full rounded-lg py-8">

        <h1 className='text-3xl font-semibold text-center text-[#536dfe]'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className='text-sm text-black font-semibold'>Username</span>
            </label>
            <input type="text" placeholder='Username' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' />
          </div>

          <div>
            <label className="label">
              <span className='text-sm text-black font-semibold'>Email</span>
            </label>
            <input type="text" placeholder='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' />
          </div>

          <div>
            <label className="label">
              <span className='text-sm text-black font-semibold'>Password</span>
            </label>
            <input type="password" placeholder='***********' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' />
          </div>

          {/* <CheckBox onCheckboxChange={genderChange} selectedGender={inputs.gender} /> */}

          <div className="mt-3">
            <h5 className='text-xs text-black font-semibold'>Al'reday have an account
              <Link to="/register">
                <span className='text-blue-500 cursor-pointer hover:underline pl-2'>Login</span>
              </Link>
            </h5>
          </div>

          <button disabled={loading} className='h-10 bg-[#536dfe] w-full text-white mt-2 rounded-md disabled:opacity-90'>
            {loading ? <span className='loading loading-spinner'></span> : "Register"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register


{/* <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className="w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

  <h1 className='text-3xl font-semibold text-center text-gray-300'>Register</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label className="label p-2">
        <span className='text-sm label-text'>Username</span>
      </label>
      <input type="text" placeholder='Username' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} className='w-full input input-bordered h-10 tracking-wider text-sm' />
    </div>

    <div>
      <label className="label p-2">
        <span className='text-sm label-text'>Email</span>
      </label>
      <input type="text" placeholder='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} className='w-full input input-bordered h-10 text-sm tracking-wider' />
    </div>

    <div>
      <label className="label">
        <span className='text-sm label-text'>Password</span>
      </label>
      <input type="password" placeholder='***********' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className='w-full input input-bordered h-10 tracking-wider text-sm' />
    </div>

    <CheckBox onCheckboxChange={genderChange} selectedGender={inputs.gender} />

    <div className="my-1">
      <h5 className='text-sm'>Al'ready have an account <span className='text-blue-500 cursor-pointer hover:underline'>Login</span></h5>
    </div>


    <div>
      <button className='btn btn-block btn-sm mt-2 border border-blue-600/40'>Register</button>
    </div>
  </form>
</div>
</div> */}