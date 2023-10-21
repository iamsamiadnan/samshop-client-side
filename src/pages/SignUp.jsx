import { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
    const {createUser, signOutUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value; 
        const email  = form.email.value; 
        const pass = form.pass.value ;
        const cpass = form.cpass.value 
        const photo_url = form.photoURL.value;
      
        console.log(name, email, pass, cpass)

        if(pass !== cpass) {
            toast.error("Password doesn't match. Please check again!");
            return;
          }
          if(pass.length < 6) {
            toast.error("Password is less than 6 characters!");
            return;
          }
          if(!/[A-Z]/.test(pass)) {
            toast.error("Password should contain at least 1 uppercase letter!")
            return;
          }
          if(!/[!#$%^&*]/.test(pass)) {
            toast.error("Password should contain at least 1 special character!")
            return;
          }


            createUser(email, pass)
            .then(() => {
       

                updateUserProfile(name, photo_url)
                .then(() => {
                    toast.success("Signed Up Successful! Please Login")
                    signOutUser()
                    form.reset()
                    navigate('/signin')
                })
                .catch(err => {
                    toast.error(err.code)

                })

            })
            .catch(err => {
        
                console.log(err)
            })


    }
  return (
    <form action="" className='border border-gray-500 rounded p-6 flex flex-col gap-2 w-max' onSubmit={handleSignUp}>
<h1 className='mb-4'>SIGN UP</h1>
            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full max-w-xs" required/>
            <input type="text" placeholder="Your Photo URL" name="photoURL" className="input input-bordered w-full max-w-xs" required/>

            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs" required/>

            <input type="password" placeholder="Password" name="pass" className="input input-bordered w-full max-w-xs" required/>
            <input type="password" placeholder="Confrim Password" name="cpass" className="input input-bordered w-full max-w-xs" required/>

        

            <div className='mt-4'>
            <input className='btn btn-accent' type="submit" value="Sign Up" />
              <span className='ml-4'>Already Signed Up? <Link className='underline' to='/signin'>Sign In!</Link></span>
            </div>

    </form>
  )
}
