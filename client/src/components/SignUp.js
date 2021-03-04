import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap"
import { Login } from "./Login";

const SignUp = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        Login({
            username: username,
            password: password
        })
        .then
    }

    };

    return (
        <Container>
        <Row>
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegisterSubmit}>
                <label>
                    Enter Username
                    <input name="username" value={formState.username} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Enter Password
                    <input name="password" value={formState.password} onChange={handleFieldChange}></input>
                </label>
                <button type="submit" style={{ background: "#ff007f" }}>Register</button>
            </form>
        </div>
        </Row>
        </Container>
    )
}

export { SignUp };

