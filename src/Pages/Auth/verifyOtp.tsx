import { ArrowBackOutlined, CachedOutlined, CheckOutlined } from '@mui/icons-material';
import { Link } from 'react-router'
import { toast } from 'sonner';
import { Button } from '../../Components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../../Components/ui/input-otp';
import { useState } from 'react';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();

        if (otp.length !== 6) {
            toast("Verification Failed", {
                description: "Please enter the complete 6-digit code"
            });
            return;
        }

        toast("Verification Successful", {
            description: "You can now reset your password"
        });

        // Redirect to reset password page
        window.location.href = '/reset-password';
    };

    const handleResend = () => {
        toast.success("Code Resent", {
            description: "A new verification code has been sent to your email"
        });
    };
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex">
            {/* Right Side - Form */}

            <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 gradient1 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Verify Your Identity</h2>
                    <p className="text-lg lg:text-xl text-white/90 text-center mb-4 lg:mb-8">
                        Security is our priority. Please enter the verification code sent to your email to continue.
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
                        <form className="space-y-6" onSubmit={handleVerify}>
                            <div className="space-y-3">
                                <label className="text-gray-800 font-medium block text-center">
                                    Enter Verification Code
                                </label>
                                <div className="flex justify-center py-4">
                                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            {/* <InputOTPSeparator /> */}
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-primary/90 transition duration-200 flex items-center justify-center"
                                    disabled={otp.length !== 6}
                                >
                                    <span>Verify Code</span>
                                    <CheckOutlined className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                            <div className="flex justify-between items-center pt-4">
                                <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/90 flex items-center">
                                    <ArrowBackOutlined className="mr-1 h-4 w-4" />
                                    <span>Back</span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={handleResend}
                                    className="text-sm font-medium text-primary hover:text-primary/90 flex items-center"
                                >
                                    <CachedOutlined className="mr-1 h-4 w-4" />
                                    <span>Resend Code</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp