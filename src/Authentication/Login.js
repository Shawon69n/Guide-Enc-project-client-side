import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-36 ml-36 flex items-center justify-start'>
             <div class="card flex-shrink-0 w-full max-w-sm bg-opacity-50 border-2 login-box-shadow ">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to='' class="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn bg-yellow-400 hover:bg-yellow-500 border-0 text-white">Login</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Login;