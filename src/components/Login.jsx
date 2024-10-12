import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Logo from "../asserts/logo.png"
import { useAuth } from '../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();

    const { login, isAuthenticated } = useAuth();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (e) => {
        if (email && password) {
            e.preventDefault();
            login({ email });
            navigate("/")
            isAuthenticated = true;
        }
        else {
            alert("Please enter email and password.");
        }
    };

    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-white">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center">
                        <img src={Logo} alt="" height={50} width={300} />
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-hoverColor">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 ">
                        Don&apos;t have an account?{' '}
                        <Link
                            to={"/signup"}
                            title=""
                            className="font-semibold text-hoverColor transition-all duration-200 hover:underline"
                        >
                            Create a free account
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <a href="#" title="" className="text-sm font-semibold text-hoverColor hover:underline">
                                        {' '}
                                        Forgot password?{' '}
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-hoverColor px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-white/80 hover:text-black"
                                >
                                    Get started <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Login