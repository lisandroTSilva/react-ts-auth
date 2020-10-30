import React, { useContext, useEffect, useReducer, useState } from "react"

import { getUsers } from "./../../repositories/getUsuarios"

interface IUser {
    id: number
    nome: string
    login: string
    menus: IMenu[]
}

interface IMenu {
    type: string // "menu" ou submenu
    label: string // "Mensagens",
    url: string // "/mensagens/",
    icon: string //"fas fa-envelope-open"
    recent?: boolean //badge new
}

interface IProfile {
    userSelected: IUser
    users: IUser[]
}

interface IContext {
    isLogged: boolean
    profile: IProfile
    changeToken(token: string): void
    changeUser(id: number): void
}

type ActionType = {
    type: "UPDATE" | "CHANGE_USER"
    payload?: any
}

const AuthContext = React.createContext<IContext>({} as IContext)

const reducer = (state, action: ActionType): IProfile => {
    switch (action.type) {
        case "UPDATE":
            const { users, userSelected } = action.payload
            return { ...state, userSelected: users[userSelected], users }

        case "CHANGE_USER":
            if (state.users === undefined || state.users.lenght === 0)
                return state

            const id = action.payload
            const newUserSelected = state.users.filter((user) => {
                console.log("ids", user.id, id)
                return user.id === id
            })
            return { ...state, userSelected: newUserSelected[0] }

        default:
            break
    }
    return state
}

export const AuthProvider = ({ children }) => {
    const [profile, dispatch] = useReducer(reducer, {} as IProfile)
    const [token, setToken] = useState<string>("")
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        //Request user from token
        console.info(`Request user from token: ${token}`)
        if (token) {
            setTimeout(() => {
                dispatch({
                    type: "UPDATE",
                    payload: {
                        userSelected: 0,
                        users: getUsers()
                    }
                })
                setIsLogged(true)
            }, 1000)
        }
    }, [token])

    const changeToken = (token: string) => {
        setToken(token)
    }

    const changeUser = (id: number) => {
        dispatch({
            type: "CHANGE_USER",
            payload: id
        })
    }

    useEffect(() => {
        console.info(`User selected: `, profile.userSelected)
    }, [profile.userSelected])

    useEffect(() => {
        console.info(`Is Logged: `, isLogged)
    }, [isLogged])

    useEffect(() => {
        console.info(`Profile: `, profile)
    }, [profile])

    return (
        <AuthContext.Provider
            value={{
                profile,
                isLogged,
                changeToken,
                changeUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): {
    changeToken: (token: string) => void
    changeUser: (id: number) => void
    profile: IProfile
    isLogged: boolean
} => {
    const { changeToken, changeUser, isLogged, profile } = useContext(
        AuthContext
    )
    return { changeToken, changeUser, profile, isLogged }
}

export { AuthRedirect } from "./AuthRouter"
