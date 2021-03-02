import React from "react";
import { Container, Row } from "react-bootstrap"

const Login = () => {
    return (
        <Container>
        <Row>
            <h1>This is the Login section</h1>
        </Row>
        </Container>
    )
}

const Logout = () => {
    return (
        <Container>
        <Row>
            <h1>This is the Logout section</h1>
        </Row>
        </Container>
    )
}

export { Login };
export { Logout };