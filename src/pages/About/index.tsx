import React from "react"
import { useAuth } from "../../services/Auth"

export const About = () => {
    const { isLogged, profile, changeUser } = useAuth()
    return (
        <div>
            <h2>About</h2>
            {isLogged && (
                <select onChange={(e) => changeUser(Number(e.target.value))}>
                    {profile.users.map((user) => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.nome}
                            </option>
                        )
                    })}
                </select>
            )}

            <pre>{JSON.stringify(profile.userSelected?.menus, null, 2)}</pre>
        </div>
    )
}
