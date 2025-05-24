// Auth
export const LOGIN = "/auth/login"
export const LOGOUT = "/auth/logout"
export const REGISTER = "/auth/signup"
export const FORGOT_PASSWORD = "/auth/forgot-password"
export const OTP_VERIFY = "/auth/verify-otp"
export const RESET_PASSWORD = "/auth/reset-password"

// User
export const USER_GET = "/user"

// Car
export const CAR_ADD = "/car/add"
export const CAR_LIST = (status: string) => `/car/list?status=${status}`
export const CAR_DETAILS = (id: string) => `/car/${id}`