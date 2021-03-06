import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Pricing } from "./Pricing";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import  Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';


const LandingNavigation = (props) => {
    return (
        <Router>
            <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">LOCKBOX</Navbar.Brand>
            <Nav className="w-100 nav-justified">
                <Nav.Item>
                    <Link className="nav-link" to="/about">About</Link>    
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/pricing">Pricing</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/contact">Contact</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/signup">Sign Up</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/login">Login</Link>    
                </Nav.Item>  
            </Nav>
            </Navbar>

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
                    <Login setIsLoggedIn={props.setIsLoggedIn} />
                </Route>
            </Switch>
        </Router>
    );
};

export { LandingNavigation };