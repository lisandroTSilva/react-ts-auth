import React, { useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import { useQuery } from "../useQuery"
import { useAuth } from "./"

export const AuthRedirect = ({ redirect = "/", path = "/callback" }) => {
    const AuthRedirectCallback = () => {
        const { changeToken } = useAuth()
        const query = useQuery()

        useEffect(() => {
            const token = query.get("token")
            if (token) changeToken(token)
        }, [changeToken, query])

        return <Redirect to={{ pathname: redirect }} />
    }
    return (
        <Route path={path} exact component={() => <AuthRedirectCallback />} />
    )
}
