import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import { Nav } from "./NavBar";

const LandingPage = () => {
    return (
        <div>
            <Nav />
            <Container>
                <Row>
                    <Col>
                        <Card style={{ color: "#000" }} class="feature" />
                        <Card.Img src=""/>
                        <Card.Body>
                            <Card.Title>
                                Feature/Benefit
                            </Card.Title>
                            <Card.Text>
                                This is a Feature or benefit of LockBox
                            </Card.Text>
                            <Button style={{ background: "#ff007f" }}>Learn More</Button>
                        </Card.Body>
                    </Col>
                    <Col xs={9}>
                        <Image src="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export { LandingPage };