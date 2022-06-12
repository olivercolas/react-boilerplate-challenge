import * as yup from "yup";

export const formFields = [
    {
        name: 'email',
        initialValue: '',
        type: 'email'
    },
    {
        name: 'password',
        initialValue: '',
        type: 'password'
    }
]

export const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required()
})

