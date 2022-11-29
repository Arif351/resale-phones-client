// import { GoogleAuthProvider } from 'firebase/auth';
// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthProvider';

// const Login = () => {
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const { signIn, googleLogin } = useContext(AuthContext);
//     const [loginError, setLoginError] = useState('');
//     const location = useLocation();
//     const navigate = useNavigate();

//     const from = location.state?.from.pathname || '/';

//     const handleLogin = (data) => {
//         console.log(data);
//         setLoginError('');
//         console.log(errors);
//         signIn(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(from, { replace: true });
//             })
//             .catch(error => {
//                 console.log(error.message);
//                 setLoginError(error.message)
//             })

//     }
//     const google = new GoogleAuthProvider()
//     const handleGoogleLogin = () => {
//         googleLogin(google)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(error => console.error(error));
//     }



//     return (
//         <div className='h-[800px] flex justify-center items-center'>
//             <div className='w-96'>
//                 <h2 className='text-4xl text-center'>Login</h2>
//                 <form onSubmit={handleSubmit(handleLogin)}>
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Email</span>
//                         </label>
//                         <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
//                         {errors.email && <p className='text-red-600 font-semibold'>{errors.email?.message}</p>}
//                     </div>
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Password</span>
//                         </label>
//                         <input type="password"
//                             {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 character longer." } })}
//                             className="input input-bordered w-full max-w-xs" />
//                         {errors.password && <p className='text-red-600 font-semibold'>{errors.password?.message}</p>}
//                         <label className="label"><span className="label-text text-sky-500 mt-2">Forget password? </span>
//                         </label>
//                     </div>
//                     <input className='btn btn-accent w-full max-w-xs my-5' value='Login' type="submit" />
//                     {loginError && <p className='text-red-500 font-semibold mb-3'>{loginError}</p>}
//                 </form>
//                 <p>New to Cell Room? <Link to="/signup" className='text-blue-400 font-semibold'>Create a new Account</Link> </p>
//                 <div className="divider w-full max-w-xs">OR</div>
//                 <button onClick={handleGoogleLogin} className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
//             </div>
//         </div>
//     );
// };

// export default Login;