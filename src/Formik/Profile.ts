import * as Yup from 'yup';
import { User } from '../Types/Common';
import { emailSchema } from './Comman';


export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: emailSchema,
    number: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    dob: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future'),
    address: Yup.object({
        address1: Yup.string().required('Address Line 1 is required'),
        address2: Yup.string(), // optional
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State/Province is required'),
        postalCode: Yup.string()
            .matches(/^\d{5,6}$/, 'Postal code must be 5 or 6 digits')
            .required('Postal code is required'),
        country: Yup.string().required('Country is required'),
    })
});

export const changePassswordValidationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().min(8, 'New password must be at least 8 characters').required('New password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
        .required('Confirm password is required')
})

export const initialValues = (user: User) => ({
    name: user?.name || '',
    email: user?.email || '',
    number: user?.number || '',
    dob: new Date(user?.dob).toISOString().split("T")[0] || '',
    address: {
        address1: user?.address?.address1 || '',
        address2: user?.address?.address2 || '',
        city: user?.address?.city || '',
        state: user?.address?.state || '',
        postalCode: user?.address?.postalCode || '',
        country: user?.address?.country || '',
    }
});
