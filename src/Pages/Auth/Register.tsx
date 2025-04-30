import { Lock, Mail, Person, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentDot, setCurrentDot] = useState(0); // Add state for the current dot

    // Function to handle dot clicks
    const handleDotClick = (index: number) => {
        setCurrentDot(index);
    };

    const handleRegister = (e: React.FormEvent) => {
    };
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex">

            {/* Left Side - Illustration */}
            <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 gradient1 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 z-10">
                    <h2 className="text-5xl font-bold text-white mb-6">Start Your Journey</h2>
                    <p className="text-xl text-white/90 text-center mb-8">
                        Join CarRide today and experience the freedom of traveling on your terms.
                        Unlock access to our premium fleet of vehicles and enjoy seamless service.
                    </p>
                    <div className="w-3/4 h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1064&h=768"
                            alt="Car dashboard"
                            className="w-full max-w-[350px] mx-auto rounded-xl shadow-2xl object-cover transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute bottom-10 left-10 flex space-x-2">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className={`h-3 w-3 rounded-full cursor-pointer transition-all ${currentDot === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
                                onClick={() => handleDotClick(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-4xl font-semibold text-color1">Create Account</h2>
                        <p className="mt-2 text-lg text-color2">Register to start your journey with CarRide</p>
                    </div>

                    <div className="mt-8 bg-white shadow-lg rounded-2xl p-8">
                        <form className="space-y-5" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="name" className="text-color1 font-medium">
                                    Full Name
                                </label>
                                <div className="mt-1 relative rounded-full border border-border">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Person />
                                    </div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="block w-full pl-12 pr-4 py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="text-color1 font-medium">
                                    Email Address
                                </label>
                                <div className="mt-1 relative rounded-full border border-border">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="block w-full pl-12 pr-4 py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="text-color1 font-medium">
                                    Password
                                </label>
                                <div className="mt-1 relative rounded-full border border-border">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="block w-full pl-12 pr-12 py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Create password"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        {showPassword ? (
                                            <VisibilityOffOutlined
                                                className="h-5 w-5 text-color2 cursor-pointer"
                                                onClick={() => setShowPassword(false)}
                                            />
                                        ) : (
                                            <VisibilityOutlined
                                                className="h-5 w-5 text-color2 cursor-pointer"
                                                onClick={() => setShowPassword(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="text-color1 font-medium">
                                    Confirm Password
                                </label>
                                <div className="mt-1 relative rounded-full border border-border">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-color2" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="block w-full pl-12 pr-12 py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Confirm password"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        {showConfirmPassword ? (
                                            <VisibilityOffOutlined
                                                className="h-5 w-5 text-color2 cursor-pointer"
                                                onClick={() => setShowConfirmPassword(false)}
                                            />
                                        ) : (
                                            <VisibilityOutlined
                                                className="h-5 w-5 text-color2 cursor-pointer"
                                                onClick={() => setShowConfirmPassword(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-color2">
                                    I agree to the{' '}
                                    <Link to="/terms" className="font-medium text-primary hover:text-primary-focus">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link to="/privacy" className="font-medium text-primary hover:text-primary-focus">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <div>
                                <button type="submit" className="btn3 w-full">
                                    Create Account
                                </button>
                            </div>

                            <div className="text-center mt-4">
                                <span className="text-color2">Already have an account? </span>
                                <Link to="/login" className="font-medium text-primary hover:text-primary-focus">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register