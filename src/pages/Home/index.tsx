import React from "react"
import { useAuth } from "../../services/Auth"

export const Home = () => {
    const { profile } = useAuth()
    return (
        <div>
            <h2>Home</h2>
            <pre>User: {JSON.stringify(profile.users, null, 4)}</pre>
        </div>
    )
}
