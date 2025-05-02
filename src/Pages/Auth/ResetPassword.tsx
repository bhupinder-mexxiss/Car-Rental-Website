import { ArrowBackOutlined, CheckOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Link } from 'react-router'
import { toast } from 'sonner';
import { Button } from '../../Components/ui/button';
import { useState } from 'react';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handlePasswordReset = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!password || !confirmPassword) {
            toast("Reset Error", {
                description: "Please fill in all fields"
            });
            return;
        }

        if (password !== confirmPassword) {
            toast("Password Mismatch", {
                description: "Passwords do not match"
            });
            return;
        }

        if (password.length < 8) {
            toast("Password Too Short", {
                description: "Password must be at least 8 characters long"
            });
            return;
        }

        // Here you would typically handle the actual password reset
        toast("Password Reset Successful", {
            description: "You can now log in with your new password"
        });

        setIsSubmitted(true);
    };
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex">
            {/* Right Side - Form */}

            <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 gradient1 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Create New Password</h2>
                    <p className="text-lg lg:text-xl text-white/90 text-center mb-4 lg:mb-8">
                        Your security is important to us. Choose a strong password to protect your account.
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
                        <h2 className="mt-6 text-4xl font-semibold text-gray-800">Verification Code</h2>
                        <p className="mt-2 text-lg text-gray-600">Enter the 6-digit code sent to your email</p>
                    </div>

                    <div className="mt-8 bg-white shadow-lg rounded-2xl p-8">
                        {!isSubmitted ? (
                            <form className="space-y-6" onSubmit={handlePasswordReset}>
                                <div>
                                    <label htmlFor="password" className="text-gray-800 font-medium">
                                        New Password
                                    </label>
                                    <div className="mt-1 relative rounded-full border border-gray-300">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <LockOutlined className="!text-lg" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="block w-full pl-12 pr-12 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Enter new password"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                            {showPassword ? (
                                                <VisibilityOffOutlined className="!text-lg cursor-pointer"
                                                    onClick={() => setShowPassword(false)}
                                                />
                                            ) : (
                                                <VisibilityOutlined className="!text-lg cursor-pointer"
                                                    onClick={() => setShowPassword(true)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="confirm-password" className="text-gray-800 font-medium">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1 relative rounded-full border border-gray-300">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <LockOutlined className="!text-lg" />
                                        </div>
                                        <input
                                            id="confirm-password"
                                            name="confirm-password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            className="block w-full pl-12 pr-12 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Confirm new password"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                            {showConfirmPassword ? (
                                                <VisibilityOffOutlined className="!text-lg cursor-pointer"
                                                    onClick={() => setShowConfirmPassword(false)}
                                                />
                                            ) : (
                                                <VisibilityOutlined className="!text-lg cursor-pointer"
                                                    onClick={() => setShowConfirmPassword(true)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="text-sm text-gray-600">
                                        Password should:
                                    </div>
                                    <ul className="text-xs text-gray-500 list-disc pl-5 pt-1 space-y-1">
                                        <li>Be at least 8 characters long</li>
                                        <li>Include uppercase and lowercase letters</li>
                                        <li>Include at least one number</li>
                                        <li>Include at least one special character</li>
                                    </ul>
                                </div>

                                <div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-primary/90 transition duration-200 flex items-center justify-center"
                                    >
                                        <span>Reset Password</span>
                                        {/* <Save className="ml-2 h-4 w-4" /> */}
                                    </Button>
                                </div>

                                <div className="text-center mt-4">
                                    <Link to="/otp-verify" className="font-medium text-primary hover:text-primary/90 flex items-center justify-center">
                                        <ArrowBackOutlined className="mr-2 h-4 w-4" />
                                        <span>Back to Verification</span>
                                    </Link>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center space-y-6 py-6">
                                <div className="flex justify-center">
                                    <div className="rounded-full bg-green-100 p-3">
                                        <CheckOutlined className="h-12 w-12 text-green-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium text-gray-800">Password Reset Complete</h3>
                                <p className="text-gray-600">
                                    Your password has been reset successfully. You can now log in with your new password.
                                </p>
                                <Link to="/login">
                                    <Button
                                        className="w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-primary/90 transition duration-200"
                                    >
                                        Go to Login
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword