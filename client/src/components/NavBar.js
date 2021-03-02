import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Pricing } from "./Pricing";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Logout } from "./Login";
import  Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { DeleteProduct } from "./DeleteProduct";
import { EditProduct } from "./EditProduct";
import { CreateProduct } from "./CreateProduct";

const LandingNavigation = () => {
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
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
};

const SignedInNavigation = () => {
    return (
        <Router>
            <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">LOCKBOX</Navbar.Brand>
            <Nav className="w-100 nav-justified">
                <Nav.Item>
                    <Link className="nav-link" to="/create">Create Product</Link>    
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/edit">Edit Product</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/delete">Delete Product</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/logout">Logout</Link>    
                </Nav.Item>  
            </Nav>
            </Navbar>

            <Switch>
                <Route path="/create">
                    <CreateProduct />
                </Route>
                <Route path="/edit">
                    <EditProduct />
                </Route>
                <Route path="/delete">
                    <DeleteProduct />
                </Route>

                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </Router>
    );
};

export { LandingNavigation };
export { SignedInNavigation };