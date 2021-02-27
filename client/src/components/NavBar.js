import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Pricing } from "./Pricing";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

const Nav = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </nav>
            </Router>
    );
};

export { Nav };