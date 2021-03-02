import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { LandingNavigation } from "./NavBar";
import { Companies, Tagline } from "./Tagline";

const LandingPage = () => {
    return (
        <div>
            <LandingNavigation />
            <Tagline />
            <Container>
                <Row>
                    <Col>
                        <Card className="text-center" style={{ color: "#000" }} class="feature" >
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq_oj8F4yPiYuwF0vKKVblRGHgDSzfVGqYw&usqp=CAU"/>
                        <Card.Body>
                            <Card.Title>
                                Feature/Benefit
                            </Card.Title>
                            <Card.Text>
                                This is a Feature or benefit of LockBox
                            </Card.Text>
                            <Button style={{ background: "#ff007f" }}>Learn More</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center" style={{ color: "#000" }} class="feature" >
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq_oj8F4yPiYuwF0vKKVblRGHgDSzfVGqYw&usqp=CAU"/>
                        <Card.Body>
                            <Card.Title>
                                Feature/Benefit
                            </Card.Title>
                            <Card.Text>
                                This is a Feature or benefit of LockBox
                            </Card.Text>
                            <Button style={{ background: "#ff007f" }}>Learn More</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center" style={{ color: "#000" }} class="feature" >
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq_oj8F4yPiYuwF0vKKVblRGHgDSzfVGqYw&usqp=CAU"/>
                        <Card.Body>
                            <Card.Title>
                                Feature/Benefit
                            </Card.Title>
                            <Card.Text>
                                This is a Feature or benefit of LockBox
                            </Card.Text>
                            <Button style={{ background: "#ff007f" }}>Learn More</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Companies />
        </div>
    );
};

export { LandingPage };