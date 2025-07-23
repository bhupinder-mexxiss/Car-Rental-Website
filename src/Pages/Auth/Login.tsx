import { EmailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'sonner';
import { loginSchema } from '../../Formik/Auth';
import { useLoginMutation } from '../../redux/baseApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/Slices/AuthSlice';

const Login = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from || "/";

    const handleLogin = async (values: any) => {
        await login(values).unwrap().then((res) => {
            toast.message("Login Successful", {
                description: "Welcome back!"
            })
            dispatch(setUser(res.user))
            console.log("From:", from);
            navigate(from)
        }).catch((err) => {
            console.log(err);
            toast.error(err.data.message)
        })
    };
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex">
            {/* Right Side - Form */}
            <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 gradient1 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 z-10">
                    <h2 className="text-5xl font-bold text-white mb-6">Welcome Back</h2>
                    <p className="text-xl text-white/90 text-center mb-8">
                        Sign in to access your CarRide account and continue your journey
                        with premium vehicles and exceptional service.
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
                        <h2 className="text-4xl font-semibold text-color1">Welcome Back</h2>
                        <p className="mt-2 text-lg text-color2">Sign in to access your account</p>
                    </div>

                    <div className="mt-8 bg-white shadow-lg rounded-2xl p-8">
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={loginSchema}
                            enableReinitialize
                            onSubmit={(values) => handleLogin(values)}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="email" className="text-color1 text-sm">
                                                Email Address
                                            </label>
                                            <div className="mt-1 relative rounded-full border border-border">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <EmailOutlined className="!text-lg" />
                                                </div>
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="block w-full pl-12 pr-4 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            {(errors.email && touched.email) && (
                                                <p className='text-sm mt-1 text-red-600'>{errors.email}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="text-color1 text-sm">
                                                Password
                                            </label>
                                            <div className="mt-1 relative rounded-full border border-border">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <LockOutlined className="!text-lg" />
                                                </div>
                                                <Field
                                                    id="password"
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    className="block w-full pl-12 pr-12 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                                    placeholder="Enter your password"
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
                                            {(errors.password && touched.password) && (
                                                <p className='text-sm mt-1 text-red-600'>{errors.password}</p>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-color2">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <Link to="/forgot-password" className="font-medium text-primary hover:text-primary-focus">
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" className="btn3 w-full">
                                                Sign In
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className="text-center mt-4">
                            <span className="text-color2">Don't have an account? </span>
                            <Link to="/register" className="font-medium text-primary hover:text-primary-focus">
                                Register now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login