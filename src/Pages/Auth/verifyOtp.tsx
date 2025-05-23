import { ArrowBackOutlined, CachedOutlined, CheckOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../components/ui/input-otp';
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { useOtpVerifyMutation } from '../../redux/baseApi';

const VerifyOtp = ({ email }: { email: string }) => {
    const navigate = useNavigate()
    const [otpVerify] = useOtpVerifyMutation()
    const [otp, setOtp] = useState('');

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();

        if (otp.length !== 6) {
            toast("Verification Failed", {
                description: "Please enter the complete 6-digit code"
            });
            return;
        }
        const values = {
            otp,
            email: email
        }

        await otpVerify(values).unwrap().then((res) => {
            console.log(res.data);
            toast.success("Verification Successful", {
                description: "You can now reset your password"
            });
            navigate(`/reset-password?resetToken=${res.data}`)
        }).catch((err) => {
            console.log(err);
            toast.error(err.data.message)
        })

    };

    const handleResend = () => {
        toast.success("Code Resent", {
            description: "A new verification code has been sent to your email"
        });
    };
    return (
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
    )
}

export default VerifyOtp