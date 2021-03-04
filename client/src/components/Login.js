import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"


const Login = (props) => {

    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });


    const handleFieldChange = (e) => {
        console.log('formState', formState);
        const newState = { ...formState }
        newState[e.target.name] = e.target.value;
        setFormState(newState);
        console.log('newState', newState);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(formState); 
        props.setIsLoggedIn(true);        // fetch("http://localhost:4000/api/user/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formState),
        //     })
        //     .then((response) => {
        //     console.log("POST response:", response);
        //     });
    };

    return (
        <Container>
        <Row>
        <Col></Col>
        <Col>  
        <Card className="text-center" style={{ color: "#000" }} >
            <Card.Body>
            <Card.Title>
                Login
            </Card.Title>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    Enter Username
                    <input name="username" value={formState.username} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Enter Password
                    <input type="password" name="password" value={formState.password} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <Button type="submit" style={{ background: "#ff007f" }}>Login</Button>
            </form>
            </Card.Body>
        </Card>
        </Col>
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