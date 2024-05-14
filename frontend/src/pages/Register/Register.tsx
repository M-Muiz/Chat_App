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

  const genderChange = (gender: string) => {
    setInputs({ ...inputs, gender })
  };

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
            <input type="text" placeholder='user@gmail.com' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' />
          </div>

          <div>
            <label className="label">
              <span className='text-sm text-black font-semibold'>Password</span>
            </label>
            <input type="password" placeholder='***********' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className='w-full input p-3 text-black h-10 bg-transparent  text-sm border-black focus-visible:border-[#536dfe]' />
          </div>

          <div className="mt-3">
            <CheckBox onCheckboxChange={genderChange} selectedGender={inputs.gender} />
          </div>

          <div className="mt-3">
            <h5 className='text-xs text-black font-semibold'>Al'reday have an account
              <Link to="/login">
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

export default Register;

