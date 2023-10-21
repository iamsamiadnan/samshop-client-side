
import toast from 'react-hot-toast';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function SignIn() {
    const {user, signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;

        const email  = form.email.value; 
        const pass = form.pass.value ;
    



        signInUser(email, pass)
        .then(res => {
   
          toast.success(`Welcome Back! ${res.user.displayName}`)
          navigate(location?.state ? location.state : '/')
         
        })
        .catch(err => {
          toast.error(err)
        })


    }
  return (
    <form action="" className='border border-gray-500 rounded p-6 flex flex-col gap-2 w-max' onSubmit={handleSignUp}>

            <h1 className='mb-4'>SIGN IN</h1>
            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs" required/>

            <input type="password" placeholder="Password" name="pass" className="input input-bordered w-full max-w-xs" required/>


            <div className='mt-4'>
              <input className='btn btn-accent text-white' type="submit" value="Sign In" />
              <span className='ml-4'>New to here? <Link className='underline' to='/signup'>Sign Up!</Link></span>
            </div>

    </form>
  )
}
