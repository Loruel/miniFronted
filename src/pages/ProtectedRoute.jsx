import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"
import { getMyInformation } from "../api/authApi"
import Loading from "../components/Loading"
import { useContext, useEffect } from "react"
import { MiniContext } from "../context/AuthContext"

function ProtectedRoute() {
    const authToken = localStorage.getItem('authToken')
    const { setUserData } = useContext(MiniContext)
    const { data, isError, isLoading } = useQuery({

        queryKey: ['user'],
        queryFn: () => getMyInformation(authToken),
        retry: 1,
        enabled: Boolean(authToken),

    })

    useEffect(() => {

        if (data && !isError && !isLoading) {
            setUserData(data)
        }
    }, [data, isError, setUserData, isLoading])

    if (isLoading) {
        return <Loading />
    }

    if (!authToken || (isError && !data)) {
        localStorage.removeItem('authToken')
        console.clear()
        return <Navigate to='/' replace={true} />
    }

    return <Outlet />

}

export default ProtectedRoute