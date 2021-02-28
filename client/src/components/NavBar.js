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
            <div class="navbar">
                <a>
                    <img src="" />
                </a>
                <a>
                    <Link to="about">About</Link>
                </a>
                <a>
                    <Link to="pricing">Pricing</Link>
                </a>
                <a>
                    <Link to="contact">Contact</Link>
                </a>
                <a>
                    <Link to="signup">Sign Up</Link>
                </a>
                <a>
                    <Link to="login">Login</Link>
                </a>
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
            </div>
        </Router>
    );
};

export { Nav };