import React from "react"
import { useAuth } from "../../services/Auth"

export const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>Home</h2>
            <pre>User: {JSON.stringify(user, null, 4)}</pre>
        </div>
    )
}
