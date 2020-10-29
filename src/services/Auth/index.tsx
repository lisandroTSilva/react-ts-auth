import React, { useContext, useEffect, useState } from "react"

const AuthContext = React.createContext<any>({})

interface IUser {
    id: number
    nome: string
    login: string
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<IUser>({} as IUser)
    const [token, setToken] = useState<string>("")
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        //Request user from token

        console.info(`Request user from token: ${token}`)
        if (token) {
            setTimeout(() => {
                setUser({
                    id: 12355,
                    nome: "Lisandro Silva",
                    login: "lisandro"
                })
                setIsLogged(true)
            }, 1000)
        }
    }, [token])

    useEffect(() => {
        console.info(`User`, user)
    }, [user])

    useEffect(() => {
        console.info(`isLogged`, isLogged)
    }, [isLogged])

    return (
        <AuthContext.Provider value={{ user, isLogged, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const { setToken, user, isLogged } = useContext(AuthContext)
    return { setToken, user, isLogged }
}

export { AuthRedirect } from "./AuthRouter"
