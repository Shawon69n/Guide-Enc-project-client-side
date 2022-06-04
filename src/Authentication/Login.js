import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-36 flex items-center justify-center'>
             <div class="card flex-shrink-0 w-full max-w-sm bg-opacity-25 border-2 bg-green-400 ">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-green-500">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-green-500">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to='' class="label-text-alt link link-hover text-green-500">Forgot password?</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-outline border-white hover:bg-green-400 text-white">Login</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Login;