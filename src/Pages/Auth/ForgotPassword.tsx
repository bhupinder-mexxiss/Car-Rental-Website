import { ArrowBackOutlined, EmailOutlined, Send, } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner';
import { Button } from '../../Components/ui/button';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!email) {
            toast.error("Please enter your email address",
                {
                    description: "Email is required for password reset",
                });
            return;
        }
        toast.success("Reset Link Sent",
            {
                description: "Please check your email for verification code",
            });

        setIsSubmitted(true);
    };
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex">
            {/* Right Side - Form */}

            <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 gradient1 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 z-10">
                    <h2 className="text-5xl font-bold text-white mb-6">Password Recovery</h2>
                    <p className="text-xl text-white/90 text-center mb-8">
                        Don't worry! It happens to the best of us. Let's get you back into your account.
                    </p>
                    <div className="w-3/4 h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1064&h=768"
                            alt="Car driving"
                            className="w-full max-w-[350px] mx-auto rounded-xl shadow-2xl object-cover transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Left Side - Illustration */}
            <div className="w-full lg:w-1/2 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className="text-center">
                        <h2 className="mt-6 text-4xl font-semibold text-gray-800">Forgot Password</h2>
                        <p className="mt-2 text-lg text-gray-600">Enter your email to receive a verification code</p>
                    </div>

                    <div className="mt-8 bg-white shadow-lg rounded-2xl p-8">
                        {!isSubmitted ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="text-color1 text-sm">
                                        Email Address
                                    </label>
                                    <div className="mt-1 relative rounded-full border border-gray-300">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <EmailOutlined className="!text-lg" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="block w-full pl-12 pr-4 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Button
                                        type="submit"
                                        className="cursor-pointer w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-primary/90 transition duration-200 flex items-center justify-center"
                                    >
                                        <span>Send Reset Link</span>
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="text-center mt-4">
                                    <Link to="/login" className="font-medium text-primary hover:text-primary/90 flex items-center justify-center">
                                        <ArrowBackOutlined className="mr-2 h-4 w-4" />
                                        <span>Back to Login</span>
                                    </Link>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <EmailOutlined className="h-16 w-16 text-primary" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-800">Check your email</h3>
                                <p className="text-gray-600">
                                    We've sent a verification code to <span className="font-medium">{email}</span>
                                </p>
                                <Button
                                    onClick={() => {
                                        window.location.href = "/otp-verify";
                                    }}
                                    className="cursor-pointer w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-primary/90 transition duration-200"
                                >
                                    Continue to Verification
                                </Button>
                                <div className="pt-4">
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="cursor-pointer text-sm text-primary hover:text-primary/90"
                                    >
                                        Use a different email
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword