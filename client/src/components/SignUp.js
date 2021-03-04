import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"


const SignUp = (props) => {

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

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    
        fetch("http://localhost:4000/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
            })
            .then((response) => {
            console.log("POST response:", response);
            });

    };

    return (
        <Container>
        <Row>
        <Col></Col>
        <Col>  
        <Card className="text-center" style={{ color: "#000" }} >
            <Card.Body>
            <Card.Title>
                Sign Up
            </Card.Title>
            <form onSubmit={handleRegisterSubmit}>
                <label>
                    Enter Username
                    <input name="username" value={formState.username} onChange={handleFieldChange}></input>
                </label>
                <label>
                    Enter Password
                    <input type="password" name="password" value={formState.password} onChange={handleFieldChange}></input>
                </label>
                <br></br>
                <Button type="submit" style={{ background: "#ff007f" }}>Sign Up</Button>
            </form>

            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    )
}

export { SignUp };

