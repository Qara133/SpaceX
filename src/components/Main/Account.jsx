import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Account() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please fill in the email and password fields!');
        } else {
            setError('');
            navigate('/'); 
        }
    };

    return (
        <main className='min-h-[100vh] pt-[280px]'>
            <div className="flex flex-col max-w-lg p-6 m-auto rounded-md sm:p-10 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-3xl">LOGIN</h1>
                    <p className="text-sm dark:text-gray-600">Please enter your e-mail and password:</p>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form noValidate="" className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="space-y-4 relative">
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-3 py-2 border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <a rel="noopener noreferrer" href="#" className="absolute top-3 right-1 text-xs dark:text-gray-600">Forgot password?</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full px-8 py-3 font-semibold bg-[#000] dark:text-gray-50 hover:text-[#000] hover:bg-[#fff] hover:border hover:border-black transition-all"
                        >
                            LOGIN
                        </button>
                        <div className='flex justify-center gap-1 text-md px-6 py-3'>
                            <p className="dark:text-gray-600">Don't have an account?</p>
                            <a rel="noopener noreferrer" href="#" className="text-[#aaa]">Create one</a>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Account;
