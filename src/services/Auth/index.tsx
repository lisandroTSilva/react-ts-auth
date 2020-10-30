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
            if (state?.users?.length === undefined) {
                return state
            }

            const id = action.payload
            const newUserSelected = state.users.filter((user) => {
                return user.id === id
            })
            return { ...state, userSelected: newUserSelected[0] }

        default:
            break
    }
    return state
}

const TOKEN_KEY = "@Auth-Token"

export const AuthProvider = ({ children }) => {
    const [profile, dispatch] = useReducer(reducer, {} as IProfile)
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [token, setToken] = useState<string>(
        localStorage.getItem(TOKEN_KEY) as string
    )

    useEffect(() => {
        //Request user from token
        console.info(`Request user from token: ${token}`)
        if (token) {
            localStorage.setItem(TOKEN_KEY, token)
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

interface IUseAuth {
    profile: IProfile
    isLogged: boolean
    changeToken(token: string): void
    changeUser(id: number): void
}

export const useAuth = (): IUseAuth => {
    const { isLogged, profile, changeToken, changeUser } = useContext(
        AuthContext
    )
    return { isLogged, profile, changeToken, changeUser }
}

export { AuthRedirect } from "./AuthRouter"
