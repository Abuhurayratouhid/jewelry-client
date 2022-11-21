import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/images/cool-background.png'
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)

    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        // console.log(email,password) 
        loginUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    
    }

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">

                    {/* login form  */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Are you new here?<Link to="/signup"><span className='text-primary'>Sign up</span></Link></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-purple-600 to-pink-500">Login</button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    );
};

export default Login;