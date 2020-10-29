import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Users } from "./pages/Users"
import { AuthRedirect, AuthProvider } from "./services/Auth"

export default function Routes() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/callback/?token=kjfdsj8(*)kdsalfj09098==">
                                Callback
                            </Link>
                        </li>
                    </ul>
                </nav>

                <AuthProvider>
                    <AuthRedirect />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </AuthProvider>
            </div>
        </Router>
    )
}
