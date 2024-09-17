import axios from "axios"

export const login = async ({ correo, contraseña }) => {
    const res = await axios.post('http://localhost:3000/api/auth/login', {
        correo,
        contraseña
    })
    return res.data
}

export const getMyInformation = async token => {
    const res = await axios.get('http://localhost:3000/api/auth/me', {
        headers: { Authorization: token }
    })
    return res.data
}

export const register = async ({ correo, contraseña }) => {
    const res = await axios.post('http://localhost:3000/api/auth/register', {
        correo,
        contraseña
    })
    return res.data
}

export const updateUser = async ({ token, userData }) => {
    const res = await axios.patch('http://localhost:3000/api/auth/me', userData, {
        headers: { Authorization: token }
    })
    return res.data
}