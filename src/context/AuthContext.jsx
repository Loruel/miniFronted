import { useMutation } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register, updateUser } from "../api/authApi";

export const MiniContext = createContext()

export const MiniProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const setLocation = useNavigate()

    const loginMutation = useMutation({

        mutationKey: ['login'],
        mutationFn: login,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
            localStorage.setItem('authToken', data.token)
            setLocation('/profile')
        }

    })

    const registerMutation = useMutation({
        mutationKey: ['register'],
        mutationFn: register,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message);
            localStorage.setItem('authToken', data.token);
            setLocation('/profile');
        }
    })

    const updateProfileMutation = useMutation({
        mutationKey: ['updateUser'],
        mutationFn: updateUser,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert('Perfil actualizado correctamente')
            setUser(data.user)
        }
    })

    const setUserData = data => {
        setUser(data)
    }

    return (

        <MiniContext.Provider value={{ user, loginMutation, setUserData, registerMutation, updateProfileMutation }}>
            {children}
        </MiniContext.Provider>

    )
}



