// Auth
export const LOGIN = "/auth/login"
export const LOGOUT = "/auth/logout"
export const REGISTER = "/auth/signup"
export const FORGOT_PASSWORD = "/auth/forgot-password"
export const OTP_VERIFY = "/auth/verify-otp"
export const RESET_PASSWORD = "/auth/reset-password"

// User
export const USER_GET = "/user"
export const USER_UPDATE = "/user/update"
export const USER_CHANGE_PASSWORD = "/user/change-password"

// Car
export const CAR_ADD = "/car/add"
export const CAR_MY_LIST = (status: string) => `/car/my-list?status=${status}`
export const CAR_DETAILS = (id: string) => `/car/${id}`
export const CAR_LIST = (queries: string) => `/car/list?${queries}`

// Wishlist
export const WISHLIST_GET = "/user/wishlist"
export const WISHLIST = (id: string) => `/user/wishlist/${id}`


// Upload
export const UPLOAD_SINGLE = "/upload-single"
export const UPLOAD_MULTI = "/upload-multiple"

// partner
export const PARTNER_REGISTER = "/user/register-partner"

export const CONTACT_FORM = "/contact-form"
export const GET_BRANDS = "/brands"
export const GET_CATEGORIES = "/categories"
